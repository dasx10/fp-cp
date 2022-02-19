import { IS_BOOLEAN } from "./index.D";

// @ts-ignore
function isBoolean <X>(x: X): IS_BOOLEAN<X>;

// @ts-ignore
function isBoolean (x: unknown): x is boolean;

// @ts-ignore
const isBoolean = (x: unknown) => x === false || x === true;
export default isBoolean;
