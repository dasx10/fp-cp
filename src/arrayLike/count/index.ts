// core
import _curry2 from "../../function/curry/2/_/index";
import arrayLikeCountCore from "./core/index";

// interfaces
import type { CountCurryDef } from "./index.D";

// dependencies
import arrayLikeCountRight from "./right/index";

const arrayLikeCountDef: CountCurryDef = _curry2(arrayLikeCountCore);
const arrayLikeCount = Object.assign(arrayLikeCountDef, {
	core  : arrayLikeCountCore,
  right : arrayLikeCountRight,
});

export default arrayLikeCount;
