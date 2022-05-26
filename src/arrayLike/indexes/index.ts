import arrayLikeIndexesCore from "./core/index";
import arrayLikeIndexesLib  from "./lib/index";

// interface
import type { ArrayLikeIndexesMain } from "./index.D";

const arrayLikeIndexes: ArrayLikeIndexesMain = Object.assign(arrayLikeIndexesCore, arrayLikeIndexesLib);

export default arrayLikeIndexes;
