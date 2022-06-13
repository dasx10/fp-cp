import type { ArrayLikeValue }    from "../../../index.D";
import type { ArrayLikeFilterOf } from '../../../filter/of/core/index.D';


export type ArrayLikeCountOf <FindValue, X extends ArrayLike<unknown>> = ArrayLikeFilterOf<X, FindValue & ArrayLikeValue<X>>['length'];


export type ArrayLikeCountOfCore <
	Type extends ArrayLike<unknown> = ArrayLike<unknown>
> = <
	FindValue extends ArrayLikeValue<X>,
	X         extends Type
>(findValue: FindValue, x: X) => ArrayLikeCountOf<FindValue, X>;
