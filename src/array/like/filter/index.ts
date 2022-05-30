import arrayFilterDef from "./contract/index";
import arrayLikeFilterLib from "./lib/index";
import type { ArrayLikeFilterMain } from "./index.D";

const arrayFilter: ArrayLikeFilterMain = Object.assign(arrayFilterDef, arrayLikeFilterLib); 
export default arrayFilter;
