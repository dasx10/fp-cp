import add        from "./calc/add/index"
import difference from "./calc/difference/index"
import multiple   from "./calc/multiple/index"
import divide     from "./calc/divide/index"
import average    from "./calc/average/index"

import isFinite   from "./is/finite/index"
import isInfinity from "./is/infinity/index"
import isInteger  from "./is/integer/index"
import isNaN      from "./is/NaN/index"
import isNegative from "./is/negative/index"
import isPositive from "./is/positive/index"

const lib = {
  add,
  difference,
  multiple,
  divide,
  average,

  isFinite,
  isInfinity,
  isInteger,
  isNaN,
  isNegative,
  isPositive,
}

const number = Object.assign(Number, lib);
export default number;
