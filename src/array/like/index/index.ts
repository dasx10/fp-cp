// core
import arrayLikeAtLastIndex        from "../at/last/index/index";
import arrayLikeIndexLib           from "./lib/index";

// interfaces
import type { ArrayLikeIndexMain } from './index.D';

const arrayLikeIndex: ArrayLikeIndexMain = Object.assign(arrayLikeAtLastIndex, arrayLikeIndexLib);

export default arrayLikeIndex;
