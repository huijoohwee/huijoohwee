import { buildKnowgrphX402PaymentRequiredResponse } from "../../../knowgrph/knowgrph-agent-ready-commerce.mjs";

export async function onRequest(context) {
  return buildKnowgrphX402PaymentRequiredResponse(context.request, context.env || {});
}
