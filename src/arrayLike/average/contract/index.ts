import _curry2 from "../../../function/curry/2/_/index";
import arrayLikeAverageCore from "../core/index";
import type { AverageArrayLikeDef } from "./index.D";
const arrayLikeAverageDef: AverageArrayLikeDef = _curry2(arrayLikeAverageCore);
export default arrayLikeAverageDef;
