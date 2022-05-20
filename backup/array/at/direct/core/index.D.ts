import type { ArrayAtResult } from './../../core/index.D';
import type { ToIndexDirect } from '../../../../arrayLike/index/index.D';
import type { ArrayIndex }    from './../../../index.D';


export type TupleAtDirect <Index extends number, X extends readonly any[]> = number extends Index 
	? ArrayAtResult<X>
	: X[Index];

export type ArrayAtDirect <Index extends number, X extends readonly any[]> = X extends readonly [...infer Values]
	? TupleAtDirect<Index, Values>
	: ArrayAtResult<X>;

export type ArrayAtDirectCore = <Index extends ArrayIndex<X>, X extends readonly any[]>(index: ToIndexDirect<Index>, x: X) => ArrayAtDirect<Index, X>;
