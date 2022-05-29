// core
import arrayLikeJoinDef from "./contract/index";
import arrayLikeJoinLib from "./lib/index";

// interfaces
import { ArrayLikeJoinMain } from "./index.D";

const arrayLikeJoin: ArrayLikeJoinMain = Object.assign(arrayLikeJoinDef, arrayLikeJoinLib);

export default arrayLikeJoin;
