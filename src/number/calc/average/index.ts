import _curry2 from "../../../function/curry/_2/index";
// @ts-ignore
function average (a: number, b: number): number;
// @ts-ignore
function average (a: number) :(b: number) => number;
// @ts-ignore
const average = _curry2((y: number, x: number) => x + y / 2);
export default average;
