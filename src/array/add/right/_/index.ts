import type { AddRightCore } from "./index.D";
const _addRight: AddRightCore = <Value, X extends readonly any[]>(value: Value, x: X): [...X, Value] => [...x, value];
export default _addRight;
