import { CheckExcludeBoolean, IS_BOOLEAN } from "./index.D";

// @ts-ignore
function isBoolean <X>(x: CheckExcludeBoolean<X>): IS_BOOLEAN<X>;
function isBoolean (x: unknown): x is boolean {
	return x === false || x === true
}
export default isBoolean;
