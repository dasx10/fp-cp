import _curry2 from "../../function/curry/2/_/index";
import _filter from "./_/index";
import type { FilterDef } from "./index.D";

const filter: FilterDef = _curry2(_filter);
export default filter;
