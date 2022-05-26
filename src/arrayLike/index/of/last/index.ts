// core
import arrayLikeIndexOfLastDef from "./contract/index";
import arrayLikeIndexOfLastLib from "./lib/index";

// interface
import { ArrayLikeIndexOfLastMain } from "./index.D";

const arrayLikeIndexOfLast: ArrayLikeIndexOfLastMain = Object.assign(arrayLikeIndexOfLastDef, arrayLikeIndexOfLastLib);

export default arrayLikeIndexOfLast;
