// dependencies
import arrayLikeIndexOfLib           from "./lib/index";
import arrayLikeIndexOfDef           from "./contract/index";

// interfaces
import type { ArrayLikeIndexOfMain } from './index.D';


const arrayLikeIndexOf: ArrayLikeIndexOfMain = Object.assign(arrayLikeIndexOfDef, arrayLikeIndexOfLib);

export default arrayLikeIndexOf;
