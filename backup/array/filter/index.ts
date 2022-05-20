// core
import _curry2 from "../../function/curry/2/_/index";
import arrayFilterCore from "./core/index";

// interfaces
import type { FilterDef } from "./index.D";

// dependencies
import filterRight from "./right/index";

const filter: FilterDef = _curry2(arrayFilterCore);

export default Object.assign(filter, {
  core : arrayFilterCore,
  right: filterRight
});
