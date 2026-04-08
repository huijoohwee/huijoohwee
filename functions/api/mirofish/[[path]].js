import { getDeerflowUpstreamBase, parseAllowedHosts, proxyUpstream } from '../_integrationHub.js';

export async function onRequest(context) {
  const { request, env } = context;
  const upstreamBase = getDeerflowUpstreamBase(env);
  const allowedHosts = parseAllowedHosts(env);
  return proxyUpstream({
    request,
    env,
    routePrefix: '/api/mirofish',
    upstreamBase,
    upstreamPrefix: '/api/mirofish',
    allowedHosts,
    timeoutEnvKey: 'KNOWGRPH_MIROFISH_TIMEOUT_MS',
  });
}

