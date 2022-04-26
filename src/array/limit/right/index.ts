// core
import _curry2                     from "../../../function/curry/2/_/index";
import _arrayLimitRight            from "./_/index";

// interfaces
import type { ArrayLimitRightDef } from "./index.D";

// @ts-ignore
const limitRight: ArrayLimitRightDef = _curry2(_arrayLimitRight);

export default Object.assign(limitRight, {
  core: _arrayLimitRight,
});
