import type { ArrayLikeValue } from "../../../index.D";
export type ArrayLikeCountValueCore = <FindValue extends ArrayLikeValue<X>, X extends ArrayLike<any>>(findValue: FindValue, x: X) => number;
