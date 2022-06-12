import type { ToIndex }        from '../../index/index.D';
import type { ArrayLikeValue } from './../../index.D';

export type ArrayLikeSlice <X extends ArrayLike<unknown>> = ArrayLikeValue<X>[];

export type ArrayLikeSliceCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <
	Form extends number,
	To   extends number,
	X    extends Type
>(from: ToIndex<Form>, to: ToIndex<To>, x: X) => ArrayLikeSlice<X>
