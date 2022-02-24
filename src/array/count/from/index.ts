import _curry2 from "../../../function/curry/2/_/index";
import _countFrom from "./_/index";

const countFrom: {
  <T>(from: T[]): (array: T[]) => number;
  <T>(from: T[], array: T[]): number;
} = _curry2(_countFrom);
export default countFrom;
