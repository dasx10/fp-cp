import type { ArrayLikeValue } from '../../../index.D';
import type { ArrayLikeFilterOfCore, ArrayLikeFilterOf } from './../core/index.D';

export type ArrayLikeFilterOfDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeFilterOfCore<Type> & {
	<FindValue extends ArrayLikeValue<Type>>(findValue: FindValue): <X extends Type>(x: X) => ArrayLikeFilterOf<FindValue, X>;
	<X extends Type>(x: X): <FindValue extends ArrayLikeValue<X>>(findValue: FindValue) => ArrayLikeFilterOf<FindValue, X>;
};
