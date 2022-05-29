import type { __ }                               from './../../../../index';
import type { AcceptString }                     from '../../../../string/index.D';
import type { ArrayLikeJoinCore, ArrayLikeJoin } from './../core/index.D';

export type ArrayLikeJoinDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeJoinCore<Type> & {
	<WaitArrayLikeType extends Type, Separator extends AcceptString>(separator: Separator): <X extends WaitArrayLikeType>(x: X) => ArrayLikeJoin<X, Separator>;
	<X extends Type>(_:__, x: X): <Separator extends AcceptString>(separator: Separator) => ArrayLikeJoin<X, Separator>;
};
