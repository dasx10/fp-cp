import isFinite   from "./finite/index";
import isInfinity from "./infinity/index";
import isInteger  from "./integer/index";
import isNaN      from "./NaN/index";
import isNegative from "./negative/index";
import isPositive from "./positive/index";
import isZero     from "./zero/index";
import isNumber   from "./_/index";

export default Object.assign(isNumber, {
  finite   : isFinite,
  infinity : isInfinity,
  integer  : isInteger,
  NaN      : isNaN,
  negative : isNegative,
  positive : isPositive,
  zero     : isZero
  // float : isFloat
});
