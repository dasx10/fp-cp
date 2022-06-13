import type { ArrayLikeValue } from "../../../index.D"
export type ArrayLikeCountOfBase <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <FindValue extends ArrayLikeValue<X>, X extends Type>(findValue: FindValue, x: X) => number;
