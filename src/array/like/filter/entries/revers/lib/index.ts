import arrayLikeFilterEntriesReversCore from "../core/index";
import arrayLikeFilterEntriesReversRight from "../right/index";

// interfaces
import type { ArrayLikeFilterEntriesReversLib } from "./index.D";

const arrayLikeFilterEntriesReversLib: ArrayLikeFilterEntriesReversLib = {
	core  : arrayLikeFilterEntriesReversCore,
	right : arrayLikeFilterEntriesReversRight,
}

export default arrayLikeFilterEntriesReversLib;
