# Knowgrph auth.md

Knowgrph publishes agent registration metadata for the read-only agent surface at https://airvio.co/knowgrph/. Agents should first fetch https://airvio.co/.well-known/oauth-protected-resource, follow its authorization_servers entry to https://airvio.co/.well-known/oauth-authorization-server, and read the agent_auth block.

## Registration

- Register: https://airvio.co/knowgrph/agent/auth
- Claim: https://airvio.co/knowgrph/agent/auth/claim
- Revoke: https://airvio.co/knowgrph/agent/auth/revoke
- Supported identity types: anonymous, identity_assertion
- Anonymous credentials: api_key
- Identity assertion types: urn:ietf:params:oauth:token-type:id-jag, verified_email
- Identity assertion credentials: access_token, api_key
- Revocation events: https://schemas.workos.com/events/agent/auth/identity/assertion/revoked
- Current runtime policy: user-mediated access through the existing Cloudflare Access/OAuth boundary; no separate MCP-only auth stack.
- Pipeline rule: agents must not bypass MainPanel -> FloatingPanel Chat -> KGC -> Canvas for user-mediated graph work; published HTTP MCP tools remain read-only until mutation auth and conflict semantics are implemented.