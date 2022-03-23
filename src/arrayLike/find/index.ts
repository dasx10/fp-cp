import _curry2 from "../../function/curry/2/_/index";
import _find   from "./_/index";
import type { ArrayLikeIDef } from "../index.D";

// dependencies
import findIndex from "./index/index";
import findRight from "./right/index";
import findIndexRight from "./index/right/index";

const find: {
  <X>(def: ArrayLikeIDef<X>, x: ArrayLike<X>): X | undefined,
  <X>(def: ArrayLikeIDef<X>): (x: ArrayLike<X>) => X | undefined
} = _curry2(_find);

export default Object.assign(find, {
  index: findIndex,
  right: Object.assign(findRight, {
    index: findIndexRight,
  }),
});
