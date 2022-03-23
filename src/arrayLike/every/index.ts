import _curry2 from "../../function/curry/2/_/index";
import _every  from "./_/index";
import type { EveryCurryDef } from "./index.D";

// dependencies
import everyRight from "./right/index";

const every: EveryCurryDef = _curry2(_every);

export default Object.assign(every, {
  right: everyRight,
});
