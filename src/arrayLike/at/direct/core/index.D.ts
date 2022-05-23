import type { ToIndexDirect } from "../../../index/index.D";
import type { DirectiveAtResult } from "../../core/index.D";
import type { ArrayLikeAtResult } from './../../core/index.D';

type AtResult <X extends Record<number, any>> = X extends ArrayLike<unknown>
	? ArrayLikeAtResult<X>
	: X extends Record<number, unknown>
		? DirectiveAtResult<X>
		: never;

export type ArrayLikeAtDirect <X extends Record<number, unknown>, Index extends number> = number extends Index
	? AtResult<X>
	: `${Index}` extends `-${number}`
		? undefined
		: AtResult<X>;
	
export type ArrayLikeAtDirectCore <Type extends Record<number, unknown> = Record<number, unknown>> = <Index extends keyof X & number, X extends Type>(index: ToIndexDirect<Index>, x: X) => ArrayLikeAtDirect<X, Index>;
