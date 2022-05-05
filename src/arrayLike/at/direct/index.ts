// core
import _curry2 from "../../../function/curry/2/_/index";
import arrayLikeAtDirectDef from "./contract/index";
import arrayLikeAtDirectLib from "./lib/index";

// interfaces
import type { ArrayLikeAtLeftMain } from './index.D';

const arrayLikeAtDirect: ArrayLikeAtLeftMain = Object.assign(arrayLikeAtDirectDef, arrayLikeAtDirectLib);
export default arrayLikeAtDirect;
