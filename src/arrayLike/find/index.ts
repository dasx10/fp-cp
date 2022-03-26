// core
import _curry2 from "../../function/curry/2/_/index";
import _find   from "./_/index";

// dependencies
import findIndex      from "./index/index";
import findRight      from "./right/index";
import findIndexRight from "./index/right/index";

// interfaces
import type { placeholder }   from "../../index";
import type { ArrayLikeIDef } from "../index.D";

const find: {
  <X>(def: ArrayLikeIDef<X>, x: ArrayLike<X>): X | undefined,
  <X>(def: ArrayLikeIDef<X>): (x: ArrayLike<X>) => X | undefined,
  <X>(_: placeholder, x: X): (def: ArrayLikeIDef<X>) => X | undefined,
} = _curry2(_find);

export default Object.assign(find, {
  core : _find,
  index: findIndex,
  right: Object.assign(findRight, {
    index: findIndexRight,
  }),
});
