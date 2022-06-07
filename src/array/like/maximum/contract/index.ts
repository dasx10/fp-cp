// core
import _curry2                      from "../../../../function/curry/2/_/index";
import arrayLikeMaximumCore         from "../core/index";

// interfaces
import type { ArrayLikeMaximumDef } from './index.D';

const arrayLIkeMaximumDef = _curry2(arrayLikeMaximumCore) as ArrayLikeMaximumDef;
export default arrayLIkeMaximumDef;
