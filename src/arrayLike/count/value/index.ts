import arrayLikeCountValueDef           from "./contract/index";
import arrayLikeCountValueLib           from "./lib/index";
import type { ArrayLikeCountValueMain } from "./index.D";

const arrayLikeCountValue: ArrayLikeCountValueMain = Object.assign(arrayLikeCountValueDef, arrayLikeCountValueLib);

export default arrayLikeCountValue;
