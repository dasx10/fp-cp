import curry2 from "../../function/curry/2/index";

// @ts-ignore
function rightStr<X extends string, Y extends string>(x: X, y: Y): `${X}${Y}`;
// @ts-ignore
function rightStr<X extends string>(x: X): <Y extends string>(y: Y) => `${X}${Y}`;
// @ts-ignore
const rightStr = curry2((x, y) => y + x);
export default rightStr;
