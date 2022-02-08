import { CharAt } from "./index.D";
declare function charAt<Index extends number, Value extends string>(index: Index, value: Value): CharAt<Value, Index>;
declare function charAt<Index extends number>(index: Index): <Value extends string>(value: Value) => CharAt<Value, Index>;
export default charAt;
