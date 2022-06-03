// dependencies
import arrayLikeFilterReversCore from "../core/index";
import arrayLikeFilterReversRight from "../right/index";

// interfaces
import type { ArrayLikeFilterReversLib } from "./index.D";

const arrayLikeFIlterReversLib: ArrayLikeFilterReversLib = {
	core  : arrayLikeFilterReversCore,
	right : arrayLikeFilterReversRight,
}

export default arrayLikeFIlterReversLib;
