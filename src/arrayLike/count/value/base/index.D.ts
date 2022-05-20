import type { ArrayLikeValue } from "../../../index.D"
export type ArrayLikeCountValueBase = <FindValue extends ArrayLikeValue<X>, X extends ArrayLike<unknown>>(findValue: FindValue, x: X) => number;
