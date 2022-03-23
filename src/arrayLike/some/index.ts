import _curry2 from "../../function/curry/2/_/index";
import _some   from "./_/index";
import type { SomeCurryDef } from "./index.D";
import someRight from "./right/index";

const some: SomeCurryDef = _curry2(_some);

export default Object.assign(some, {
  right: someRight,
});
