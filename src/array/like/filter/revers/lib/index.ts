// dependencies
import arrayLikeFilterEntriesRevers from "../../entries/revers/index";
import arrayLikeFilterIndexesRevers from "../../indexes/revers/index";
import arrayLikeFilterReversCore from "../core/index";
import arrayLikeFilterReversRight from "../right/index";

// interfaces
import type { ArrayLikeFilterReversLib } from "./index.D";

const arrayLikeFilterReversLib: ArrayLikeFilterReversLib = {
	core    : arrayLikeFilterReversCore,
	right   : arrayLikeFilterReversRight,
	indexes : arrayLikeFilterIndexesRevers,
	entries : arrayLikeFilterEntriesRevers,
}

export default arrayLikeFilterReversLib;
