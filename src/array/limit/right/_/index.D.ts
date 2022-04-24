import type { ArrayConsistent, Unboxing } from "../../../index.D";

export type TupleLimitLeft <Finish extends number, Tuple extends readonly any[], Break = Tuple> = 
	`-${Tuple['length']}` extends `${Finish}`
		? Tuple
		: Tuple extends readonly [any, ...infer Next] 
			? TupleLimitLeft<Finish, Next, Break>
			: Break;

export type ArrayLimitRight <Finish extends number, X extends readonly any[]> = number extends Finish
	? ArrayConsistent<X>
	: X extends readonly [...infer Next]
	  ? `-${Next['length']}` extends `-${Finish}`
			? Next
			: TupleLimitLeft<Finish, Next>
		: X
