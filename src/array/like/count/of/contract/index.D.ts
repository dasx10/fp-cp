import type { ArrayLikeCountOfCore } from "../core/index.D";
import type { ArrayLikeValue }          from '../../../index.D';
import type { __ } from "../../../../../index";

export type ArrayLikeCountOfDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeCountOfCore<Type> & {
	<FindValue extends ArrayLikeValue<Type>>(findValue: FindValue): <X extends Type>(x: X) => number;
	<X extends Type>(_:__, x: X): <Value extends ArrayLikeValue<X>> (value: Value) => number;
};


