// core
import _curry2                      from "../../../function/curry/2/_/index";
import arrayLikeAverageCore         from "../core/index";

// interfaces
import type { ArrayLikeAverageDef } from "./index.D";

// initial
const arrayLikeAverageDef: ArrayLikeAverageDef = _curry2(arrayLikeAverageCore);
export default arrayLikeAverageDef;
