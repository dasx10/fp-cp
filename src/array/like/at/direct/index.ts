// core
import _curry2              from "../../../../function/curry/2/_/index";
import arrayLikeAtDirectDef from "./contract/index";
import arrayLikeAtDirectLib from "./lib/index";

// interfaces
import type { ArrayLikeAtDirectMain } from './index.D';

const arrayLikeAtDirect: ArrayLikeAtDirectMain = Object.assign(arrayLikeAtDirectDef, arrayLikeAtDirectLib);
export default arrayLikeAtDirect;
