// core
import arrayLikeAtLastIndexCore        from "../at/last/index/index";
import arrayLikeIndexLib           from "./lib/index";

// interfaces
import type { ArrayLikeIndexMain } from './index.D';

const arrayLikeIndex: ArrayLikeIndexMain = Object.assign(arrayLikeAtLastIndexCore, arrayLikeIndexLib);

export default arrayLikeIndex;
