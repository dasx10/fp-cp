// calculate
import sum        from "./calc/sum/index"
import difference from "./calc/difference/index"
import multiple   from "./calc/multiple/index"
import divide     from "./calc/divide/index"
import average    from "./calc/average/index"

// test
import is from "./is/index";

function number (): 0;
function number (x: false | '' | []): 0;
function number (x: true) : 1;
function number <X extends number>(x: X): X;
function number (x?: unknown) {
  return x ? +<any>x : 0;
}

export default Object.assign(number, {
  sum,
  difference,
  multiple,
  divide,
  average,

  is,
});
