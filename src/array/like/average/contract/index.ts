// core
import _curry2 from "../../../../function/curry/2/_/index";
import arrayLikeAverageCore         from "../core/index";

// interfaces
import type { ArrayLikeAverageDef } from "./index.D";

// initial
const arrayLikeAverageDef = _curry2(arrayLikeAverageCore) as ArrayLikeAverageDef;
export default arrayLikeAverageDef;

const a = arrayLikeAverageDef((value, index, x: 'user') => value.length)
