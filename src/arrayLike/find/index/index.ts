import _curry2                from "../../../function/curry/2/_/index";
import arrayLikeFindIndexCore from "./core/index";

// dependencies
import arrayLikeFindIndexRightDef from "./right/index";

// interfaces
import type { ArrayLikeFindIndexDef } from "./index.D";

const arrayLikeFindIndexDef: ArrayLikeFindIndexDef = _curry2(arrayLikeFindIndexCore);

const arrayLikeFindIndex = Object.assign(arrayLikeFindIndexDef, {
  core : arrayLikeFindIndexCore,
  right: arrayLikeFindIndexRightDef
});

export default arrayLikeFindIndex;
