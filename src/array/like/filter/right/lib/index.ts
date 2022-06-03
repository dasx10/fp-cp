// core
import arrayLikeFIlterEntriesRight from "../../entries/right/index";
import arrayLikeFilterIndexesRight from "../../indexes/right/index";
import arrayLikeFilterReversRight  from "../../revers/right/index";
import arrayLikeFilterRightCore    from "../core/index";

// interfaces
import type { ArrayLikeFilterRightLib } from "./index.D";

const arrayLikeFilterRightLib: ArrayLikeFilterRightLib = {
	core    : arrayLikeFilterRightCore,
	indexes : arrayLikeFilterIndexesRight,
	entries : arrayLikeFIlterEntriesRight,
	revers  : arrayLikeFilterReversRight,
}

export default arrayLikeFilterRightLib;
