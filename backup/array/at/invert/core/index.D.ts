import type { ToIndexInvert } from '../../../../arrayLike/index/index.D';
import type { TupleReverse }  from '../../../reverse/index.D';
import type { ArrayAtResult } from './../../core/index.D';

export type TupleAtInvert<Index extends number, X extends readonly any[]> = `${Index}` extends `-${infer Invert}`
	// @ts-ignore
	? [undefined, ...TupleReverse<X>][Invert]
	: undefined;

export type ArrayAtInvert <Index extends number, X extends readonly any[]> = X extends readonly [...infer Values]
	? TupleAtInvert<Index, Values>
	: ArrayAtResult<X>;

export type ArrayAtInvertCore = <Index extends number, X extends readonly any[]> (index: ToIndexInvert<Index>, x: X) => ArrayAtInvert<Index, X>;
