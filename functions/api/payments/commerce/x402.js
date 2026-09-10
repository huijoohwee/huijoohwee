import { buildAgenticGraphX402PaymentRequiredResponse } from "../../../agentic-graph/agentic-graph-agent-ready-commerce.mjs";

export async function onRequest(context) {
  return buildAgenticGraphX402PaymentRequiredResponse(context.request, context.env || {});
}
