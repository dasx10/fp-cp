import arrayFilterDef from "./contract/index";
import arrayFilterLib from "./lib/index";
import type { ArrayFilterMain } from "./index.D";

const arrayFilter: ArrayFilterMain = Object.assign(arrayFilterDef, arrayFilterLib); 
export default arrayFilter;
