import type { ArrayIndex, ArrayValue } from "../../index.D";

type Result <Value, Def> = Def extends (value: Value, index: number, x: Value[]) => infer R ? R : never;

type _Map <
  Values extends readonly any[],
  Def    extends (value: ArrayValue<Values>, index: ArrayIndex<Values>, array: Values) => Result<ArrayValue<Values>, Def>,
> = Values extends readonly [infer First, ...infer Next]
// @ts-ignore
? [Result<First, Def>, ..._Map<Next, Def>]
: [];

export type Mapped <
  Values  extends readonly any[],
  Def     extends (value: ArrayValue<Values>, index: ArrayIndex<Values>, array: Values) => Result<ArrayValue<Values>, Def>,
> = Values extends readonly [infer First, ...infer Next] 
  // @ts-ignore
  ? [Result<First, Def>, ..._Map<Next, Def>]
  : Values extends readonly [] ? [] : ReturnType<Def>[];
