import curry2 from "../../function/curry/2/index";

// @ts-ignore
function leftStr<X extends string, Y extends string>(x: X, y: Y): `${Y}${X}`;
// @ts-ignore
function leftStr<X extends string>(x: X): <Y extends string>(y: Y) => `${Y}${X}`;
// @ts-ignore
const leftStr = curry2((x, y) => x + y);
export default leftStr;
