// core
import _curry2                    from "../../../function/curry/2/_/index";
import _limitLeft                 from "./_/index";

// interfaces
import type { ArrayLimitLeftDef } from "./index.D";

const limitLeft: ArrayLimitLeftDef = _curry2(_limitLeft);

export default Object.assign(limitLeft, {
  core: _limitLeft,
});
