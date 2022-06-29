// core
import arrayLikeIncludesLastDef from "./contract/index";
import arrayLikeIncludesLastLib from "./lib/index";

// interfaces
import { ArrayLikeIncludesLastMain } from "./index.D";

const arrayLikeIncludesLast: ArrayLikeIncludesLastMain = Object.assign(arrayLikeIncludesLastDef, arrayLikeIncludesLastLib);
export default arrayLikeIncludesLast;
