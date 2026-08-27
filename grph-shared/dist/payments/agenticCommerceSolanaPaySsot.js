import { buildAgenticCommerceSemanticKey } from './agenticCommerceSemanticKey.js';
const SOLANA_PAY_BASE58_ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const SOLANA_PAY_BASE58_CHAR_PATTERN = /^[1-9A-HJ-NP-Za-km-z]+$/;
export const AGENTIC_COMMERCE_SOLANA_PAY_KEY = 'solana_pay';
export const AGENTIC_COMMERCE_SOLANA_PAY_SETTLE_PATH = '/api/payments/commerce/solana-pay/settle';
export const AGENTIC_COMMERCE_SOLANA_PAY_DEFAULT_LABEL = 'AgenticGraph';
export const AGENTIC_COMMERCE_SOLANA_PAY_DEFAULT_COMMITMENT = 'confirmed';
export const AGENTIC_COMMERCE_SOLANA_PAY_DEFAULT_NETWORK = 'mainnet';
export const AGENTIC_COMMERCE_SOLANA_PAY_ENV_KEYS = {
    recipient: 'SOLANA_PAY_RECIPIENT',
    splToken: 'SOLANA_PAY_SPL_TOKEN',
    label: 'SOLANA_PAY_LABEL',
    rpcUrl: 'SOLANA_PAY_RPC_URL',
    amountScale: 'SOLANA_PAY_AMOUNT_SCALE',
    network: 'SOLANA_PAY_NETWORK',
    commitment: 'SOLANA_PAY_COMMITMENT',
};
const readEnvString = (env, key) => String(env[key] || '').trim();
export const isAgenticCommerceSolanaPayBase58Value = (value) => {
    const text = String(value || '').trim();
    return text.length >= 32 && text.length <= 64 && SOLANA_PAY_BASE58_CHAR_PATTERN.test(text);
};
const hexToBytes = (hex) => {
    const bytes = [];
    for (let index = 0; index + 1 < hex.length; index += 2) {
        bytes.push(Number.parseInt(hex.slice(index, index + 2), 16) || 0);
    }
    return bytes;
};
const encodeBase58Bytes = (bytes) => {
    let digits = [0];
    for (const byte of bytes) {
        let carry = byte;
        digits = digits.map(digit => {
            const value = digit * 256 + carry;
            carry = Math.floor(value / 58);
            return value % 58;
        });
        while (carry > 0) {
            digits.push(carry % 58);
            carry = Math.floor(carry / 58);
        }
    }
    for (const byte of bytes) {
        if (byte !== 0)
            break;
        digits.push(0);
    }
    return digits.reverse().map(digit => SOLANA_PAY_BASE58_ALPHABET[digit]).join('');
};
export const buildAgenticCommerceSolanaPayReference = (sessionId) => {
    const hex = Array.from({ length: 8 }, (_, index) => buildAgenticCommerceSemanticKey('solana-pay-reference', [sessionId, index])).join('');
    return encodeBase58Bytes(hexToBytes(hex));
};
export const readAgenticCommerceSolanaPayRecipient = (env) => {
    const recipient = readEnvString(env, AGENTIC_COMMERCE_SOLANA_PAY_ENV_KEYS.recipient);
    return isAgenticCommerceSolanaPayBase58Value(recipient) ? recipient : '';
};
export const readAgenticCommerceSolanaPaySplToken = (env) => {
    const splToken = readEnvString(env, AGENTIC_COMMERCE_SOLANA_PAY_ENV_KEYS.splToken);
    return splToken && isAgenticCommerceSolanaPayBase58Value(splToken) ? splToken : '';
};
export const readAgenticCommerceSolanaPayLabel = (env) => readEnvString(env, AGENTIC_COMMERCE_SOLANA_PAY_ENV_KEYS.label) || AGENTIC_COMMERCE_SOLANA_PAY_DEFAULT_LABEL;
export const readAgenticCommerceSolanaPayRpcUrl = (env) => {
    const configured = readEnvString(env, AGENTIC_COMMERCE_SOLANA_PAY_ENV_KEYS.rpcUrl);
    try {
        const url = new URL(configured);
        return url.protocol === 'https:' || url.protocol === 'http:' ? url.toString() : '';
    }
    catch {
        return '';
    }
};
export const readAgenticCommerceSolanaPayNetwork = (env) => readEnvString(env, AGENTIC_COMMERCE_SOLANA_PAY_ENV_KEYS.network) || AGENTIC_COMMERCE_SOLANA_PAY_DEFAULT_NETWORK;
export const readAgenticCommerceSolanaPayCommitment = (env) => {
    const commitment = readEnvString(env, AGENTIC_COMMERCE_SOLANA_PAY_ENV_KEYS.commitment);
    return commitment === 'processed' || commitment === 'confirmed' || commitment === 'finalized'
        ? commitment
        : AGENTIC_COMMERCE_SOLANA_PAY_DEFAULT_COMMITMENT;
};
export const readAgenticCommerceSolanaPayAmountScale = (env, currency) => {
    const configured = Number(readEnvString(env, AGENTIC_COMMERCE_SOLANA_PAY_ENV_KEYS.amountScale));
    if (Number.isInteger(configured) && configured > 0 && configured <= 1_000_000_000)
        return configured;
    const normalizedCurrency = String(currency || '').trim().toLowerCase();
    if (normalizedCurrency === 'usd')
        return 100;
    if (normalizedCurrency === 'sol')
        return 1_000_000_000;
    return 1_000_000;
};
export const formatAgenticCommerceSolanaPayAmount = (amountTotal, scale) => {
    const safeAmount = Math.max(0, Math.floor(Number(amountTotal) || 0));
    const safeScale = Math.max(1, Math.floor(Number(scale) || 1));
    const whole = Math.floor(safeAmount / safeScale);
    const remainder = safeAmount % safeScale;
    if (remainder === 0)
        return String(whole);
    const decimals = String(remainder).padStart(String(safeScale - 1).length, '0').replace(/0+$/g, '');
    return `${whole}.${decimals}`;
};
export const buildAgenticCommerceSolanaPayUrl = (args) => {
    const params = new URLSearchParams();
    params.set('amount', args.amount);
    if (args.splToken)
        params.set('spl-token', args.splToken);
    params.set('reference', args.reference);
    params.set('label', args.label);
    params.set('message', args.message);
    params.set('memo', args.memo);
    return `solana:${args.recipient}?${params.toString()}`;
};
