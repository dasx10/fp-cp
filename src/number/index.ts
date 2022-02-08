import add        from "./calc/add/index"
import difference from "./calc/difference/index"
import multiple   from "./calc/multiple/index"
import divide     from "./calc/divide/index"
import average    from "./calc/average/index"

const lib = {
  add,
  difference,
  multiple,
  divide,
  average,
}

const number = Object.assign(Number, lib);
export default number;
