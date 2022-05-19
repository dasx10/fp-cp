import type { ArrayLikeValue } from "../../../index.D"
export type ArrayLikeCountValueBase = <FindValue extends ArrayLikeValue<X>, X extends ArrayLike<any>>(findValue: FindValue, x: X) => number;
