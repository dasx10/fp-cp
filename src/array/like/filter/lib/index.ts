import arrayLikeFilterCore    from "../core/index";
import arrayLikeFilterEntries from "../entries/index";
import arrayLikeFilterIndexes from "../indexes/index";
import arrayLikeFilterRevers from "../revers/index";
import arrayLikeFilterRight   from "../right/index";

// interfaces
import type { ArrayLikeFilterLib } from "./index.D";

const arrayLikeFilterLib: ArrayLikeFilterLib = {
	core    : arrayLikeFilterCore,
	right   : arrayLikeFilterRight,
	indexes : arrayLikeFilterIndexes,
	entries : arrayLikeFilterEntries,
	revers  : arrayLikeFilterRevers,
}

export default arrayLikeFilterLib;
