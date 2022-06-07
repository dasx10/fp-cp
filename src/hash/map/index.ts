import type { ArrayValue } from "../../array/index.D";

const hashMap = <Values extends readonly [unknown, unknown][]>(...values: Values) => new Map<ArrayValue<Values>['0'], ArrayValue<Values>['1']>(values);
export default hashMap;
