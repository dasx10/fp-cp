import type { Chars }         from '../../../../../../string/chars/index.D';
import type { ArrayIndex }    from '../../../../../index.D';
import { ArrayLikeIndex } from '../../../../index.D';
import type { ToIndexDirect } from './../../../../index/index.D';

export type ArrayLikeAtDirectIndex <Index extends number, X extends ArrayLike<unknown>> = X extends readonly [unknown, ...unknown[]]
  ? Index & ArrayIndex<X> extends never
		? void
		: Index & ArrayIndex<X> extends ArrayIndex<X>
			? Index & ArrayIndex<X>
			: X extends string
				? ArrayLikeAtDirectIndex<Index, Chars<X>>
				: Index | void
		: X extends readonly []
			? void
			: Index & ArrayLikeIndex<X> | void;

export type ArrayLikeAtDirectIndexCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	<Index extends keyof X & number, X extends Type>(index: ToIndexDirect<Index>, x: X) => ArrayLikeAtDirectIndex<Index, X>;
