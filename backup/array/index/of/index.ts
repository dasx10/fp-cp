// core
import _curry2  from "../../../function/curry/2/_/index";
import _indexOf from "./_/index";

// dependencies
import indexOfRight from "./right/index";

const indexOf = _curry2(_indexOf);

export default Object.assign(indexOf, {
  core  : _indexOf,
  right : indexOfRight
});
