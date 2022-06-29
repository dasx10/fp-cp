// core
import arrayLikeIncludesDef from "./contract/index";
import arrayLikeIncludesLib from "./lib/index";

// interfaces
import { ArrayLikeIncludesMain } from './index.D';

const arrayLikeIncludes: ArrayLikeIncludesMain = Object.assign(arrayLikeIncludesDef, arrayLikeIncludesLib);
export default arrayLikeIncludes;
