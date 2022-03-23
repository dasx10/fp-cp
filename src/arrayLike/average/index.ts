// core
import _curry2 from "../../function/curry/2/_/index";
import _average from "./_/index";

// interfaces
import type { AverageArrayLikeDef } from "./index.D";

// dependencies
import averageRight from "./right/index";

const average: AverageArrayLikeDef = _curry2(_average);

export default Object.assign(average, {
  right: averageRight,
});
