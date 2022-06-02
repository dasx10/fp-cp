import arrayLikeFilterCore    from "../core/index";
import arrayLikeFilterEntries from "../entries/index";
import arrayLikeFilterIndexes from "../indexes/index";
import arrayLikeFilterReverse from "../reverse/index";
import arrayLikeFilterRight   from "../right/index";

// interfaces
import type { ArrayLikeFilterLib } from "./index.D";

const arrayLikeFilterLib: ArrayLikeFilterLib = {
	core    : arrayLikeFilterCore,
	right   : arrayLikeFilterRight,
	indexes : arrayLikeFilterIndexes,
	entries : arrayLikeFilterEntries,
	reverse : arrayLikeFilterReverse,
}

export default arrayLikeFilterLib;
