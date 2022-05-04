// core
import _curry2 from "../../function/curry/2/_/index";
import arrayLikeAverageCore from "./core/index";

// dependencies
import arrayLikeAverageRight from "./right/index";

// interfaces
import type { AverageArrayLikeDef } from "./index.D";

const arrayLikeAverageDef: AverageArrayLikeDef = _curry2(arrayLikeAverageCore);

const arrayLikeAverage = Object.assign(arrayLikeAverageDef, {
	core  : arrayLikeAverageCore,
  right : arrayLikeAverageRight,
});

export default arrayLikeAverage;
