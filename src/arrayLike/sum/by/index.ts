import _curry2 from "../../../function/curry/2/_/index";
import _sumBy  from "./_/index";

const sumBy:{
  <Key extends PropertyKey>(key: Key): <X extends Record<Key, number>>(x: ArrayLike<X>) => number;
  <Key extends keyof X, X extends Record<Key, number>>(key: Key, x: ArrayLike<X>): number;
} = _curry2(_sumBy);

export default sumBy;
