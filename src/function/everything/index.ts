// core
import everythingDef from "./contract/index";
import everythingLib from "./lib/index";

// interfaces
import { EverythingMain } from "./index.D";

const everything: EverythingMain = Object.assign(everythingDef, everythingLib);
export default everything;
