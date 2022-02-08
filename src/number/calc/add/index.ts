import _curry2 from "../../../function/curry/_2/index";

// @ts-ignore
function add (a: number, b: number): number;
// @ts-ignore
function add (a: number) :(b: number) => number;
// @ts-ignore
const add = _curry2((y: number, x: number) => x + y);
export default add;
