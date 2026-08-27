import { buildAgenticGraphX402PaymentRequiredResponse } from "../../../agenticgraph/agenticgraph-agent-ready-commerce.mjs";

export async function onRequest(context) {
  return buildAgenticGraphX402PaymentRequiredResponse(context.request, context.env || {});
}
