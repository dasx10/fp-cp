import arrayLikeAtLast  from "../at/last/index";
import arrayLikeLastLib from "./lib/index";
import type { ArrayLikeLastMain } from "./index.D";

const arrayLikeLast: ArrayLikeLastMain = Object.assign(arrayLikeAtLast, arrayLikeLastLib);

export default arrayLikeLast;
