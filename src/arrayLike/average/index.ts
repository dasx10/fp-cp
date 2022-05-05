// core
import arrayLikeAverageDef from "./contract/index";
import arrayLikeAverageCore from "./core/index";

// dependencies
import arrayLikeAverageRight from "./right/index";

const arrayLikeAverage = Object.assign(arrayLikeAverageDef, {
	core  : arrayLikeAverageCore,
  right : arrayLikeAverageRight,
});

export default arrayLikeAverage;
