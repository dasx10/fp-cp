import type Array from "../index";
import { ArrayLastElement } from "../index.D";

export type ArrayReverse<AnyTuple extends any[], Recursive extends any[] = []> = AnyTuple extends Array<infer T, infer P>
? ArrayReverse<P>
: ReturnType<AnyTuple extends [infer F, ...infer L] ? () => ArrayReverse<L,[F,...Recursive]> : () => Recursive>;


export type ArrayMaybeReverse<AnyTuple extends any[]> = AnyTuple extends Array<infer T, infer P> ? ArrayMaybeReverse<P> : AnyTuple extends [infer First, infer Second, ...infer Next] 
	? First extends Second 
		? First extends ArrayLastElement<Next>
			? AnyTuple
			: ArrayReverse<AnyTuple>
		: ArrayReverse<AnyTuple>
	: AnyTuple;
