import { IS_UNDEFINED } from "./index.D";

// @ts-ignore
function isUndefined <X>(x: X): IS_UNDEFINED<X>;
// @ts-ignore
function isUndefined (x: unknown): x is undefined;

// @ts-ignore
const isUndefined = (x: unknown) => x === void 0;
export default isUndefined;
