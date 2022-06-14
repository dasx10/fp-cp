import type { ArrayLikeCountOf, ArrayLikeCountOfCore } from "../core/index.D";
import type { ArrayLikeValue }          from '../../../index.D';
import type { __ } from "../../../../../index";

export type ArrayLikeCountOfDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeCountOfCore<Type> & {
	<FindValue extends ArrayLikeValue<Type>>(findValue: FindValue): <X extends Type>(x: X) => ArrayLikeCountOf<FindValue, X>;
	<X extends Type>(_:__, x: X): <FindValue extends ArrayLikeValue<X>> (findValue: FindValue) => ArrayLikeCountOf<FindValue, X>;
};


