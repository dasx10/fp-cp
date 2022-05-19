// core
import arrayLikeAtRandomCore from "./core/index";
import arrayLikeAtRandomLib from "./lib/index";

// interfaces
import type { ArrayLikeAtRandomMain } from "./index.D";

const arrayLikeAtRandom: ArrayLikeAtRandomMain = Object.assign(arrayLikeAtRandomCore, arrayLikeAtRandomLib);
export default arrayLikeAtRandom;
