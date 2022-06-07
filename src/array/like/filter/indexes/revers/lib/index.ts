import arrayLikeFilterIndexesReversCore  from "../core/index";
import arrayLikeFilterIndexesReversRight from "../right/index";

import type { ArrayLikeFilterIndexesReversLib } from "./index.D";

const arrayLikeFilterIndexesReversLib: ArrayLikeFilterIndexesReversLib = {
	core  : arrayLikeFilterIndexesReversCore,
	right : arrayLikeFilterIndexesReversRight,
};

export default arrayLikeFilterIndexesReversLib;
