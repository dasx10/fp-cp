import arrayLikeEveryDef from "./contract/index";
import arrayLikeEveryLib from "./lib/index";

// interfaces
import type { ArrayLikeEveryMain } from "./index.D";

const arrayLikeEvery: ArrayLikeEveryMain = Object.assign(arrayLikeEveryDef, arrayLikeEveryLib)

export default arrayLikeEvery;
