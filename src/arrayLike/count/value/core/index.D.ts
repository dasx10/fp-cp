import type { ArrayLikeValue } from "../../../index.D";
export type ArrayLikeCountValueCore = <FindValue extends ArrayLikeValue<X>, X extends ArrayLike<unknown>>(findValue: FindValue, x: X) => number;
