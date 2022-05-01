// core
import _curry2  from "../../../function/curry/2/_/index";
import arrayLikeIndexOfCore from "./core/index";

// dependencies
import arrayLikeIndexOfLast from "./last/index";

// interfaces
import type { ArrayLikeIndexOfDef } from "./index.D";

const arrayLikeIndexOfDef: ArrayLikeIndexOfDef = _curry2(arrayLikeIndexOfCore);

const arrayLikeIndexOf = Object.assign(arrayLikeIndexOfDef, {
  core  : arrayLikeIndexOfCore,
  last  : arrayLikeIndexOfLast
});

export default arrayLikeIndexOf;
