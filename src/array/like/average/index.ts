// core
import arrayLikeAverageDef from "./contract/index";
import arrayLikeAverageLib from "./lib/index";

// interfaces
import type { ArrayLikeAverageMain } from "./index.D";

const arrayLikeAverage: ArrayLikeAverageMain = Object.assign(arrayLikeAverageDef, arrayLikeAverageLib);

export default arrayLikeAverage;
