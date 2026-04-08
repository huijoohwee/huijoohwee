import { getDeerflowUpstreamBase, parseAllowedHosts, proxyUpstream } from '../_integrationHub.js';

export async function onRequest(context) {
  const { request, env } = context;
  const upstreamBase = getDeerflowUpstreamBase(env);
  const allowedHosts = parseAllowedHosts(env);
  return proxyUpstream({
    request,
    env,
    routePrefix: '/api/deerflow',
    upstreamBase,
    upstreamPrefix: '',
    allowedHosts,
    timeoutEnvKey: 'KNOWGRPH_DEERFLOW_TIMEOUT_MS',
  });
}

