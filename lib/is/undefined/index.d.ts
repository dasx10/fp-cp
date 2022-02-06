import { Defined } from "../defined/index";
declare function isUndefined(x: undefined): true;
declare function isUndefined(x: Defined): false;
declare function isUndefined(x: unknown): x is undefined;
export default isUndefined;
