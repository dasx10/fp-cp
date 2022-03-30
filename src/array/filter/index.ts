// core
import _curry2 from "../../function/curry/2/_/index";
import _filter from "./_/index";

// interfaces
import type { FilterDef } from "./index.D";

// dependencies
import filterRight from "./right/index";

const filter: FilterDef = _curry2(_filter);

export default Object.assign(filter, {
  core : _filter,
  right: filterRight
});
