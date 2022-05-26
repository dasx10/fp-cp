import _curry2       from "../../../function/curry/2/_/index";
import objectForEachCore from "../core/index";
import type { ObjectForEachDef } from "./index.D";

const objectForEachDef = _curry2(objectForEachCore) as ObjectForEachDef;
export default objectForEachDef;
