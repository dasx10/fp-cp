import _curry2 from "../../../function/curry/2/_/index";
import _averageRight from "./_/index";
import type { AverageDef } from "../index.D";

const averageRight = _curry2(_averageRight) as AverageDef;

export default Object.assign(averageRight, {
  core: _averageRight,
});
