import arrayLikeJoinByDef from "./contract/index";
import arrayLikeJoinByLib from "./lib/index";

// interfaces
import { ArrayLikeJoinByMain } from "./index.D";

const arrayLikeJoinBy: ArrayLikeJoinByMain = Object.assign(arrayLikeJoinByDef, arrayLikeJoinByLib);
export default arrayLikeJoinBy;
