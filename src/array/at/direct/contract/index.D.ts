import type { ToIndexDirect } from '../../../../arrayLike/index/index.D';
import { placeholder } from '../../../../index';
import type { ArrayIndex } from '../../../index.D';
import type { ArrayAtDirect, ArrayAtDirectCore } from './../core/index.D';

export type ArrayAtDirectDef = ArrayAtDirectCore & {
	<Index extends number>(index: ToIndexDirect<Index>): <X extends readonly any[]>(x: X) => ArrayAtDirect<Index, X>;
	<X extends readonly any[]>(_: placeholder, x: X): <Index extends ArrayIndex<X>>(x: ToIndexDirect<Index>) => ArrayAtDirect<Index, X>;
}
