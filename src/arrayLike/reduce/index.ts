// dependencies
import arrayLikeReduceDef from "./contract/index";
import arrayLikeReduceLib from "./lib/index";

// interfaces
import type { ArrayLikeReduceMain } from "./index.D";

const arrayLikeReduce: ArrayLikeReduceMain = Object.assign(arrayLikeReduceDef, arrayLikeReduceLib);

export default arrayLikeReduce;
