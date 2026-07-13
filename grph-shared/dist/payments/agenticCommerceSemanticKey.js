import { hashSignatureParts } from '../hash/signature.js';
export const buildAgenticCommerceSemanticKey = (scope, parts) => hashSignatureParts(['agentic-commerce', scope, ...parts]);
