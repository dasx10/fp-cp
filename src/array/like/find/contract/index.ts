// core
import _curry2           from "../../../../function/curry/2/_/index";
import arrayLikeFindCore from "../core/index";

// interfaces
import type { ArrayLikeFindDef } from './index.D';

const arrayLikeFindDef = _curry2(arrayLikeFindCore) as ArrayLikeFindDef;
export default arrayLikeFindDef;
