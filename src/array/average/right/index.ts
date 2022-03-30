import _curry2 from "../../../function/curry/2/_/index";
import _averageRight from "./_/index";
import { AverageDef } from "../index.D";

const averageRight: AverageDef = _curry2(_averageRight);

export default Object.assign(averageRight, {
  core: _averageRight,
});
