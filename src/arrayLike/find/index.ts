// core
import _curry2 from "../../function/curry/2/_/index";
import arrayLikeFindCore   from "./core/index";

// dependencies
import arrayLikeFindIndex  from "./index/index";
import arrayLikeFindRight  from "./right/index";

// interfaces
import type { ArrayLikeFindDef } from "./index.D";

const arrayLikeFindDef: ArrayLikeFindDef = _curry2(arrayLikeFindCore);

const arrayLikeFind = Object.assign(arrayLikeFindDef, {
  core : arrayLikeFindCore,
  index: arrayLikeFindIndex,
  right: arrayLikeFindRight,
});

export default arrayLikeFind;
