import { ArrayValue } from "../../../array/index.D";

const hashSet = <Values extends readonly any[]>(...values: Values) => new Set<ArrayValue<Values>>(values);
export default hashSet;
