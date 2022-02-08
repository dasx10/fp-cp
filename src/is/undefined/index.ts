import { Defined } from "../defined/index";

// @ts-ignore
function isUndefined (x: undefined): true;
// @ts-ignore
function isUndefined (x: Defined): false;
// @ts-ignore
function isUndefined (x: unknown): x is undefined;

// @ts-ignore
const isUndefined = (x: unknown) => x === void 0;
export default isUndefined;
