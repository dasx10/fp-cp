import type { ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeCount } from "../../core/index.D";


export type ArrayLikeCountOf <FindValue, X extends ArrayLike<unknown>> = ArrayLikeCount<X>;


export type ArrayLikeCountOfCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <FindValue extends ArrayLikeValue<X>, X extends Type>(findValue: FindValue, x: X) => ArrayLikeCountOf<FindValue, X>;
