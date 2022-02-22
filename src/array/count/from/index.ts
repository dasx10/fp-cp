import _curry2 from "../../../function/curry/2/_/index";
import _countFrom from "./_/index";

// @ts-ignore
function countFrom <T>(from: T[]): (array: T[]) => number;
// @ts-ignore
function countFrom <T>(from: T[], array: T[]): number;
// @ts-ignore
const countFrom = _curry2(_countFrom);
export default countFrom;
