// core
import _curry2 from "../../function/curry/2/_/index";
import arrayAverageCore from "./core/index";

// interfaces
import type { AverageDef } from "./index.D";

// dependencies
import averageOf    from "./of/index";
import averageRight from "./right/index";

const average = _curry2(arrayAverageCore) as AverageDef;

export default Object.assign(average, {
  core  : arrayAverageCore,
  of    : averageOf,
  right : averageRight
});
