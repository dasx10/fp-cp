// core
import _curry2                   from "../../../../function/curry/2/_/index";
import arrayLikeJoinCore         from "../core/index";

// interfaces
import type { ArrayLikeJoinDef } from "./index.D";


const arrayLikeJoinDef = _curry2(arrayLikeJoinCore) as ArrayLikeJoinDef;
export default arrayLikeJoinDef;
