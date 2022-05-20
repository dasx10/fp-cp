import _curry2                  from "../../../function/curry/2/_/index";
import arrayAverageCore         from "../core/index";
import type { ArrayAverageDef } from "./index.D";

const arrayAverageDef = _curry2(arrayAverageCore) as ArrayAverageDef;
export default arrayAverageDef;
