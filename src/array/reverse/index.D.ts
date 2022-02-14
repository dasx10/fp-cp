import { Tail } from "../at/tail/index.D";

export type ArrayReverse<AnyTuple extends any[], Recursive extends any[] = []> = ReturnType<AnyTuple extends [infer F, ...infer L] ? () => ArrayReverse<L,[F,...Recursive]> : () => Recursive>;

export type ArrayMaybeReverse<AnyTuple extends any[]> = AnyTuple extends readonly [infer X, infer Y, ...infer Next] 
	? X extends Y 
		? X extends Tail<Next>
			? AnyTuple
			: ArrayReverse<AnyTuple>
		: ArrayReverse<AnyTuple>
	: AnyTuple;
