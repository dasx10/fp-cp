import type { ArrayConsistent, TupleConsistent, ArrayValue } from "../../../../index.D";

export type TupleLimitLeft <Finish extends number, Tuple extends readonly unknown[], Break = Tuple> = Tuple['length'] extends Finish
? Tuple
: Tuple extends readonly [...infer T, unknown]
  ? TupleLimitLeft<Finish, T, Break>
  : Break;

export type ArrayLimitLeft <Finish extends number, Array extends readonly unknown[]> = number extends Finish 
	? ArrayConsistent<Array>
	: Array extends readonly [...infer Values] 
		? TupleLimitLeft<Finish, Values> 
		: Array;
