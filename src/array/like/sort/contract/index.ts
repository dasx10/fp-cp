// core
import _curry2           from "../../../../function/curry/2/_/index";
import arrayLikeSortCore from "../core/index";

// interfaces
import type { ArrayLikeSortDef } from "./index.D";

const arrayLikeSortDef = _curry2(arrayLikeSortCore) as ArrayLikeSortDef;
export default arrayLikeSortDef;
