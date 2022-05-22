import _curry2 from "../../../function/curry/2/_/index";
import arrayLikeFindCore from "../core/index";
import type { ArrayLikeFindDef } from './../index.D';

const arrayLikeFindRightDef: ArrayLikeFindDef = _curry2(arrayLikeFindCore);
export default arrayLikeFindRightDef;
