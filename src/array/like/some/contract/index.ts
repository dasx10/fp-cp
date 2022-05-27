import _curry2 from "../../../function/curry/2/_/index";
import arrayLikeSomeCore from "../core/index";
import type { ArrayLikeSomeDef } from "./index.D";

const arrayLikeSomeDef: ArrayLikeSomeDef = _curry2(arrayLikeSomeCore) as ArrayLikeSomeDef;
export default arrayLikeSomeDef;
