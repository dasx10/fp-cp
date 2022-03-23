// core
import _curry2 from "../../../function/curry/2/_/index";
import _averageRight from "./_/index";

// interfaces
import type { AverageArrayLikeDef } from "../index.D";

const averageRight: AverageArrayLikeDef = _curry2(_averageRight);
export default averageRight;
