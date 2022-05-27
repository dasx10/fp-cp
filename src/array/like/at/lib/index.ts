import arrayLikeAtCore    from "../core/index";
import arrayLikeAtFirst   from "../first/index";
import arrayLikeAtDirect  from "../direct/index";
import arrayLikeAtRandom  from "../random/index";
import arrayLikeAtInvert  from "../invert/index";
import arrayLikeLast      from "../last/index";
import arrayLikeAtRight   from "../right/index";

// interfaces
import type { ArrayLikeAtLib } from "./index.D";

const arrayLikeAtLib: ArrayLikeAtLib = {
  core   : arrayLikeAtCore,
  first  : arrayLikeAtFirst,
  last   : arrayLikeLast,
  random : arrayLikeAtRandom,
  direct : arrayLikeAtDirect,
  invert : arrayLikeAtInvert,
	right  : arrayLikeAtRight,
};

export default arrayLikeAtLib;
