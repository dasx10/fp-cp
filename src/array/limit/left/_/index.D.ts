import type { TupleConsistent, Unboxing } from "../../../index.D";

export type TupleLimitLeft <Finish extends number, Tuple extends any[], Break = Tuple> = Tuple['length'] extends Finish
? Tuple
: Tuple extends [...infer T, any]
  ? TupleLimitLeft<Finish, T, Break>
  : Break;

export type ArrayLimitLeft <Finish extends number, Tuple extends any[]> = number extends Finish 
? Tuple extends [...infer Values] ? TupleConsistent<Values> : Unboxing<Tuple>[]
: Tuple extends [...infer Values] ? TupleLimitLeft<Finish, Values> : Tuple;
