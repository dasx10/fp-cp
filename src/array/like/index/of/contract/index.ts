import _curry2              from "../../../../../function/curry/2/_/index";
import arrayLikeIndexOfCore from "../core/index";

// interfaces
import type { ArrayLikeIndexOfDef } from './index.D';

const arrayLikeIndexOfDef: ArrayLikeIndexOfDef = _curry2(arrayLikeIndexOfCore);
export default arrayLikeIndexOfDef;
