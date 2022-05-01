import { ArrayValue } from "../../array/index.D";

const hashMap = <Values extends readonly [any, any][]>(...values: Values) => new Map<ArrayValue<Values>['0'], ArrayValue<Values>['1']>(values);
export default hashMap;
