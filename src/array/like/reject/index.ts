// core
import arrayLikeRejectDef from "./contract/index";
import arrayLikeRejectLib from "./lib/index";

// interfaces
import { ArrayLikeRejectMain } from "./index.D";

const arrayLikeRejected: ArrayLikeRejectMain = Object.assign(arrayLikeRejectDef, arrayLikeRejectLib);
export default arrayLikeRejected;
