// core
import _curry2                from "../../../../function/curry/2/_/index";
import arrayLikeRejectCore    from "../core/index";

// interfaces
import { ArrayLikeRejectDef } from "./index.D";

const arrayLikeRejectDef = _curry2(arrayLikeRejectCore) as ArrayLikeRejectDef;
export default arrayLikeRejectDef;
