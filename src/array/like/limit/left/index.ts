// core
import _curry2                    from "../../../../function/curry/2/_/index";
import _arrayLimitLeft                 from "./_/index";

// interfaces
import type { ArrayLimitLeftDef } from "./index.D";

// @ts-ignore
const arrayLimitLeft: ArrayLimitLeftDef = _curry2(_arrayLimitLeft);

export default Object.assign(arrayLimitLeft, {
  core: _arrayLimitLeft,
});
