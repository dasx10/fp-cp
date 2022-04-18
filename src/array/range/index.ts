import _curry2 from "../../function/curry/2/_/index";
import _range from "./_/index";
import rangeDecrement from "./decrement/index";
import rangeIncrement from "./increment/index";

const range = _curry2(_range);

export default Object.assign(range, {
  core     : _range, 
  increment: rangeIncrement,
  decrement: rangeDecrement,
});
