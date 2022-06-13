// core
import arrayLikeCountSomeDef from "./contract/index";
import arrayLikeCountSomeLib from "./lib/index";

// interfaces
import type { ArrayLikeCountSomeMain } from "./index.D";

const arrayLikeCountSome: ArrayLikeCountSomeMain = Object.assign(arrayLikeCountSomeDef, arrayLikeCountSomeLib);
export default arrayLikeCountSome;
