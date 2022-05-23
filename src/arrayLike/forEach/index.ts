// dependencies
import arrayLikeForEachDef from "./contract/index";
import arrayLikeForEachLib from './lib/index';

// interfaces
import type { ArrayLikeForEachMain } from "./index.D";

const arrayLikeForEach: ArrayLikeForEachMain = Object.assign(arrayLikeForEachDef, arrayLikeForEachLib);

export default arrayLikeForEach;
