import { hashString32, hashStringToHex } from './stringHash.js';
const normalizePrimitive = (value) => {
    if (value === null || value === undefined)
        return '';
    if (typeof value === 'boolean')
        return value ? '1' : '0';
    if (typeof value === 'number')
        return Number.isFinite(value) ? String(value) : '';
    return String(value);
};
export const buildSignatureText = (parts) => (parts.map(normalizePrimitive).join('|'));
export const hashSignatureParts = (parts) => (hashStringToHex(buildSignatureText(parts)));
export const hashSignatureParts32 = (parts) => (hashString32(buildSignatureText(parts)));
