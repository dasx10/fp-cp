import type { __ }                         from '../../../../../index';
import type { ArrayLikeValue }             from '../../../index.D';
import type { ArrayLikeIncludes }          from '../../core/index.D';
import type { ArrayLikeIncludesLastCore } from './../core/index.D';

export type ArrayLikeIncludesLastDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeIncludesLastCore<Type> & {
	<Value extends ArrayLikeValue<Type>>(value: Value): <X extends Type>(x: X) => ArrayLikeIncludes<X>;
	<X extends Type> (_:__, x: X) : <Value extends ArrayLikeValue<X>>(value: Value) => ArrayLikeIncludes<X>;
}
