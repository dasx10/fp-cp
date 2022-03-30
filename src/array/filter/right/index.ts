// core
import _curry2            from "../../../function/curry/2/_/index";
import _filterRight       from "./_/index";

// interfaces
import type { FilterDef } from './../index.D';

const filterRight: FilterDef = _curry2(_filterRight);
export default filterRight;
