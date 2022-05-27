// core
import arrayLikeSomeLib from "./lib/index";
import arrayLikeSomeDef from "./contract/index";

// interfaces
import type { ArrayLikeSomeMain } from "./index.D";

const arrayLikeSome: ArrayLikeSomeMain = Object.assign(arrayLikeSomeDef, arrayLikeSomeLib);

export default arrayLikeSome;
