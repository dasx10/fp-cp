// core
import _curry2                 from "../../../function/curry/2/_/index";
import arrayFilterCore         from "../core/index";

// interfaces
import type { ArrayFilterDef } from "./index.D";

const arrayFilterDef = _curry2(arrayFilterCore) as ArrayFilterDef;
export default arrayFilterDef;
