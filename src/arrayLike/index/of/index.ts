// core
import _curry2  from "../../../function/curry/2/_/index";
import _indexOf from "./_/index";

// dependencies
import indexOfRight from "./right/index";

// interfaces
import type { IndexOfDef } from "./index.D";

const indexOfDef: IndexOfDef = _curry2(_indexOf);

const indexOf = Object.assign(indexOfDef, {
  core  : _indexOf,
  right : indexOfRight
});

export default indexOf;
