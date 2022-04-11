import _curry2       from "../../../../function/curry/2/_/index";
import _indexOfRight from "./_/index";
import type { IndexOfRightDef } from "./index.D";

const indexOfRightDef: IndexOfRightDef = _curry2(_indexOfRight);
const indexOfRight    = Object.assign(indexOfRightDef, {
  core: _indexOfRight,
});

export default indexOfRight;
