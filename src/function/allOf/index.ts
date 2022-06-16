// core
import allOfDef from "./contract/index";
import allOfLib from "./lib/index";

// interfaces
import { AllOfMain } from "./index.D";

const allOf: AllOfMain = Object.assign(allOfDef, allOfLib);
export default allOf;
