import type { __ } from "../../../index";
import type { ArrayLikeSumByCore } from "./core/index.D";

type ArrayLikeSumByClosure    = <Key extends PropertyKey>(key: Key) => <X extends Record<Key, number>>(x: ArrayLike<X>) => number;
// type ArrayLikeSumBy_          = <Key extends PropertyKey, X extends Record<Key, number>>(_: placeholder, x: ArrayLike<X>) => (key: Key) => number;
export type ArrayLikeSumByDef = ArrayLikeSumByCore
& ArrayLikeSumByClosure
// & ArrayLikeSumBy_;
