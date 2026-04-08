/**
 * External URL policy (SSOT) for Pages Functions that fetch remote URLs.
 *
 * Goals:
 * - Prevent obvious SSRF / open-proxy abuse (block loopback/private IP literals + internal hostnames).
 * - Keep behavior deterministic in an edge runtime (no DNS resolution).
 * - Fail-closed on malformed/ambiguous inputs.
 */
const DEFAULT_ALLOWED_PORTS = Object.freeze(new Set(["", "80", "443"]));
const DEFAULT_BLOCKED_HOST_SUFFIXES = Object.freeze([".local", ".localhost", ".internal"]);
const DEFAULT_BLOCKED_HOST_EXACT = Object.freeze(new Set(["localhost"]));

function normalizeHostname(value) {
  return String(value || "").trim().toLowerCase();
}

function isIpv4Literal(hostname) {
  const host = normalizeHostname(hostname);
  if (!/^\d{1,3}(\.\d{1,3}){3}$/.test(host)) return false;
  const parts = host.split(".").map((p) => Number(p));
  if (parts.length !== 4) return false;
  return parts.every((n) => Number.isInteger(n) && n >= 0 && n <= 255);
}

function ipv4ToInt(hostname) {
  const [a, b, c, d] = hostname.split(".").map((p) => Number(p));
  // eslint-disable-next-line no-bitwise
  return ((a << 24) | (b << 16) | (c << 8) | d) >>> 0;
}

function inIpv4Cidr(hostInt, baseInt, maskBits) {
  if (!Number.isInteger(maskBits) || maskBits < 0 || maskBits > 32) return false;
  if (maskBits === 0) return true;
  // eslint-disable-next-line no-bitwise
  const mask = (0xffffffff << (32 - maskBits)) >>> 0;
  // eslint-disable-next-line no-bitwise
  return (hostInt & mask) === (baseInt & mask);
}

function isIpv6Literal(hostname) {
  // URL.hostname returns IPv6 without brackets (e.g. "2001:db8::1")
  const host = normalizeHostname(hostname);
  if (!host) return false;
  if (!host.includes(":")) return false;
  // Reject obviously invalid characters early.
  return /^[0-9a-f:]+$/i.test(host);
}

function isBlockedIpv6(hostname) {
  const host = normalizeHostname(hostname);
  if (!host) return true;
  if (host === "::1" || host === "0:0:0:0:0:0:0:1") return true;
  // Unique local addresses: fc00::/7 (fc* or fd*)
  if (host.startsWith("fc") || host.startsWith("fd")) return true;
  // Link-local: fe80::/10 (fe8*, fe9*, fea*, feb*)
  if (/^fe[89ab]/i.test(host)) return true;
  return false;
}

function isBlockedHostname(hostname, { blockedExact, blockedSuffixes } = {}) {
  const host = normalizeHostname(hostname);
  if (!host) return true;

  const exact = blockedExact || DEFAULT_BLOCKED_HOST_EXACT;
  if (exact instanceof Set && exact.has(host)) return true;

  const suffixes = blockedSuffixes || DEFAULT_BLOCKED_HOST_SUFFIXES;
  if (Array.isArray(suffixes)) {
    for (const s of suffixes) {
      const suffix = normalizeHostname(s);
      if (!suffix) continue;
      if (host === suffix) return true;
      if (host.endsWith(suffix)) return true;
    }
  }
  return false;
}

function isBlockedIpLiteral(hostname) {
  const host = normalizeHostname(hostname);
  if (!host) return true;

  if (isIpv4Literal(host)) {
    const hostInt = ipv4ToInt(host);
    const ranges = [
      // 0.0.0.0/8 (this network)
      { base: "0.0.0.0", bits: 8 },
      // 10.0.0.0/8 (private)
      { base: "10.0.0.0", bits: 8 },
      // 127.0.0.0/8 (loopback)
      { base: "127.0.0.0", bits: 8 },
      // 169.254.0.0/16 (link-local)
      { base: "169.254.0.0", bits: 16 },
      // 172.16.0.0/12 (private)
      { base: "172.16.0.0", bits: 12 },
      // 192.168.0.0/16 (private)
      { base: "192.168.0.0", bits: 16 },
      // 100.64.0.0/10 (carrier-grade NAT)
      { base: "100.64.0.0", bits: 10 },
    ];
    for (const r of ranges) {
      const baseInt = ipv4ToInt(r.base);
      if (inIpv4Cidr(hostInt, baseInt, r.bits)) return true;
    }
    return false;
  }

  if (isIpv6Literal(host)) return isBlockedIpv6(host);

  return false;
}

function parseAndValidateExternalUrl(raw, { allowedPorts } = {}) {
  const value = String(raw || "").trim();
  if (!value) throw new Error("invalid_url");

  let url;
  try {
    url = new URL(value);
  } catch {
    throw new Error("invalid_url");
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") throw new Error("invalid_url");
  if (url.username || url.password) throw new Error("invalid_url");

  const ports = allowedPorts || DEFAULT_ALLOWED_PORTS;
  const port = String(url.port || "");
  if (ports instanceof Set && !ports.has(port)) throw new Error("port_not_allowed");

  const hostname = normalizeHostname(url.hostname);
  if (!hostname) throw new Error("invalid_url");
  if (isBlockedHostname(hostname)) throw new Error("blocked_host");
  if (isBlockedIpLiteral(hostname)) throw new Error("blocked_host");

  return url;
}

function shouldRejectCrossSiteFetch(request) {
  // Best-effort browser-level abuse mitigation.
  // This blocks common "use our domain as a proxy from a third-party site" patterns.
  const s = String(request.headers.get("sec-fetch-site") || "").trim().toLowerCase();
  return s === "cross-site";
}

export { parseAndValidateExternalUrl, shouldRejectCrossSiteFetch };

