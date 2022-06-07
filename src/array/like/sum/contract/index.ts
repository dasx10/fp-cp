// core
import _curry2 from "../../../../function/curry/2/_/index";
import arrayLikeSumCore from "../core/index";

// interfaces
import type { ArrayLikeSumDef } from "./index.D";

const arrayLikeSumDef = _curry2(arrayLikeSumCore) as ArrayLikeSumDef;
export default arrayLikeSumDef;
