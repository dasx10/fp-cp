import _curry2 from "../../function/curry/2/_/index";
import arrayLikeSomeCore   from "./core/index";
import arrayLikeSomeRight  from "./right/index";

// interfaces
import type { SomeCurryDef } from "./index.D";

const arrayLikeSomeDef: SomeCurryDef = _curry2(arrayLikeSomeCore);
const arrayLikeSome = Object.assign(arrayLikeSomeDef, {
  right: arrayLikeSomeRight,
});

export default arrayLikeSome;
