import arrayLikeSelectDef from "./contract/index";
import arrayLikeSelectLib from "./lib/index";

// interfaces
import { ArrayLikeSelectMain } from "./index.D";

const arrayLikeSelect: ArrayLikeSelectMain = Object.assign(arrayLikeSelectDef, arrayLikeSelectLib);
export default arrayLikeSelect; 
