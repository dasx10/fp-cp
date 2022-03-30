import { AddLeftCore } from "./index.D";
const _addLeft: AddLeftCore = <Value, X extends readonly any[]>(value: Value, x: X): [Value, ...X] => [value, ...x];
export default _addLeft;
