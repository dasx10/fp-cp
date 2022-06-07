// core
import arrayLikeRejectDef from "./contract/index";
import arrayLikeRejectLib from "./lib/index";

// interfaces
import { ArrayLikeRejectMain } from "./index.D";

const arrayLikeReject: ArrayLikeRejectMain = Object.assign(arrayLikeRejectDef, arrayLikeRejectLib);
export default arrayLikeReject;
