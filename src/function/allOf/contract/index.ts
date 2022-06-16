// core
import _curry2           from "../../curry/2/_/index";
import allOfCore         from "../core/index";

// interfaces
import type { AllOfDef } from "./index.D";

const allOfDef = _curry2(allOfCore) as AllOfDef;
export default allOfDef;
