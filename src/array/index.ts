import arrayCore from "./core/index";
import arrayLib  from "./lib/index";

import type { ArrayMain } from "./index.D";

const array: ArrayMain = Object.assign(arrayCore, arrayLib);
export default array;
