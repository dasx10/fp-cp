import type { ArrayValue } from "../../array/index.D";
export type ArrayLikeCore = <Values extends readonly any[]>(...args: Values) => ArrayLike<ArrayValue<Values>>;
