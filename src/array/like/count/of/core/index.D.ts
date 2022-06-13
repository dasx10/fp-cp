import type { ArrayLikeValue }    from "../../../index.D";
import type { ArrayLikeFilterOf } from '../../../filter/of/core/index.D';
import { ArrayLikeFilterPredicate } from "../../../filter/core/index.D";


export type ArrayLikeCountOf <FindValue, X extends ArrayLike<unknown>> = ArrayLikeFilterPredicate<X, FindValue & ArrayLikeValue<X>>['length'];


export type ArrayLikeCountOfCore <
	Type extends ArrayLike<unknown> = ArrayLike<unknown>
> = <
	FindValue extends ArrayLikeValue<Type & X>,
	X         extends Type
>(findValue: FindValue & ArrayLikeValue<Type & X>, x: X) => ArrayLikeCountOf<FindValue & ArrayLikeValue<X>, X>;
