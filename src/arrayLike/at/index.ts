// core
import arrayLikeAtDef      from "./contract/index";

// dependencies
import arrayLikeAtLib      from "./lib/index";

// interfaces
import type { ArrayLikeAtMain } from "./index.D";

const arrayLikeAt: ArrayLikeAtMain = Object.assign(arrayLikeAtDef, arrayLikeAtLib);
export default arrayLikeAt;
