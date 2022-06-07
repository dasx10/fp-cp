// core
import _curry2                      from "../../../../function/curry/2/_/index";
import arrayLikeMinimumCore         from "../core/index";

// interfaces
import type { ArrayLikeMinimumDef } from './index.D';

const arrayLikeMinimumDef = _curry2(arrayLikeMinimumCore) as ArrayLikeMinimumDef;
export default arrayLikeMinimumDef;
