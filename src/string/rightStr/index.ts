import _curry2 from "../../function/curry/2/_/index";

// @ts-ignore
function rightStr<X extends string, Y extends string>(x: X, y: Y): `${X}${Y}`;
// @ts-ignore
function rightStr<X extends string>(x: X): <Y extends string>(y: Y) => `${X}${Y}`;
// @ts-ignore
const rightStr = _curry2(
  <
    Y extends string = string,
    X extends string = string,
    R extends `${Y}${X}` = `${Y}${X}`
  >(y: Y, x: X): R => y + x as R
);
export default rightStr;
