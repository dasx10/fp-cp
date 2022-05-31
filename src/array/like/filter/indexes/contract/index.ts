// core
import _curry2                    from "../../../../../function/curry/2/_/index";
import arrayLikeFilterIndexesCore from '../core/index';

// interfaces
import type { ArrayLikeFilterIndexesDef } from "./index.D";

const arrayLikeFilterIndexesDef = _curry2(arrayLikeFilterIndexesCore) as ArrayLikeFilterIndexesDef;
export default arrayLikeFilterIndexesDef;
