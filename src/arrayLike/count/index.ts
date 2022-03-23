// core
import _curry2 from "../../function/curry/2/_/index";
import _count from "./_/index";

// interfaces
import type { CountCurryDef } from "./index.D";

// dependencies
import countRight from "./right/index";

const count: CountCurryDef = _curry2(_count);

export default Object.assign(count, {
  right: countRight,
});
