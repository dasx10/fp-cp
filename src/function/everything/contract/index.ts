// core
import _curry2           from "../../curry/2/_/index";
import everythingCore    from "../core/index";

// interfaces
import type { EverythingDef } from "./index.D";

const everythingDef = _curry2(everythingCore) as EverythingDef;
export default everythingDef;
