// core
import _curry2 from "../../function/curry/2/_/index";
import _average from "./_/index";

// interfaces
import type { AverageDef } from "./index.D";

// dependencies
import averageOf    from "./of/index";
import averageRight from "./right/index";

const average = _curry2(_average) as AverageDef;

export default Object.assign(average, {
  core  : _average,
  of    : averageOf,
  right : averageRight
});
