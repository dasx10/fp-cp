import _curry2       from "../../../../function/curry/2/_/index";
import arrayLikeIndexOfLastCore from "./core/index";
import type { ArrayLikeIndexOfLastDef } from "./index.D";

const arrayLikeIndexOfLastDef: ArrayLikeIndexOfLastDef = _curry2(arrayLikeIndexOfLastCore);
const arrayLikeIndexOfLast    = Object.assign(arrayLikeIndexOfLastDef, {
  core: arrayLikeIndexOfLastCore,
});

export default arrayLikeIndexOfLast;
