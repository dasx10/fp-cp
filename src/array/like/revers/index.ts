// core
import arrayLikeReversCore from "./core/index";
import arrayLikeReversLib from "./lib/index";

// interfaces
import { ArrayLikeReversMain } from "./index.D";

const arrayLikeRevers: ArrayLikeReversMain = Object.assign(arrayLikeReversCore, arrayLikeReversLib);
export default arrayLikeRevers;
