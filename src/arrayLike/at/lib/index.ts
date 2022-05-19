import arrayLikeAtCore   from "../core/index";
import arrayLikeHead     from "../head/index";
import arrayLikeAtDirect from "../direct/index";
import arrayLikeAtRandom from "../random/index";
import arrayLikeAtInvert from "../invert/index";
import arrayLikeTail     from "../tail/index";
import arrayLikeAtRight  from "../right/index";

// interfaces
import type { ArrayLikeAtLib } from "./index.D";

const arrayLikeAtLib: ArrayLikeAtLib = {
  core   : arrayLikeAtCore,
  head   : arrayLikeHead,
  tail   : arrayLikeTail,
  random : arrayLikeAtRandom,
  direct : arrayLikeAtDirect,
  invert : arrayLikeAtInvert,
	right  : arrayLikeAtRight,
};

export default arrayLikeAtLib;
