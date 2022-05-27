// core
import _curry2                       from "../../../../../function/curry/2/_/index";
import { ToIndexDirect } from "../../../index/index.D";
import arrayLikeAtDirectCore         from '../core/index';

// interfaces
import type { ArrayLikeAtDirectDef } from "./index.D";

const arrayLikeAtDirectDef = _curry2(arrayLikeAtDirectCore) as ArrayLikeAtDirectDef; 
export default arrayLikeAtDirectDef;
