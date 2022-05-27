// core
import _curry2                from "../../../../function/curry/2/_/index";
import arrayLikeFindEntryCore from "../core/index";

// interface
import type { ArrayLikeFindEntryDef } from "./index.D";

const arrayLikeFindEntryDef: ArrayLikeFindEntryDef = _curry2(arrayLikeFindEntryCore) as ArrayLikeFindEntryDef;
export default arrayLikeFindEntryDef;
