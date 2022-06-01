import _curry3 from "../../../src/function/curry/3/_/index";
import { ExcludeNumber } from "../index.D";
import _clamp    from "./_/index";
import { Clamp } from "./_/index.D";

const clamp: {
  <MIN extends number>(min: MIN): {
    <MAX extends number, X extends number>(max: MAX, x: number): Clamp<MIN, MAX, X>;
    <MAX extends number>(max: MAX): <X extends number>(x: number) => Clamp<MIN, MAX, X>;
  }
  <MIN extends number, MAX extends number>(min: MIN, max: MAX): <X extends number>(x: X) => Clamp<MIN, MAX, X>
  <MIN extends number, MAX extends number, X extends number> (min: MIN, max: MAX, x: X): Clamp<MIN, MAX, X>;
} = _curry3(_clamp);

export default clamp;
