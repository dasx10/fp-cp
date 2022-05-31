import arrayFilterDef from "./contract/index";
import arrayLikeFilterLib from "./lib/index";
import type { ArrayLikeFilterMain } from "./index.D";

const arrayLikeFilter: ArrayLikeFilterMain = Object.assign(arrayFilterDef, arrayLikeFilterLib); 
export default arrayLikeFilter;
