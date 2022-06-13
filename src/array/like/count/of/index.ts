import arrayLikeCountOfDef              from "./contract/index";
import arrayLikeCountOfLib           from "./lib/index";
import type { ArrayLikeCountOfMain } from "./index.D";

const arrayLikeCountOf: ArrayLikeCountOfMain = Object.assign(arrayLikeCountOfDef, arrayLikeCountOfLib);

export default arrayLikeCountOf;
