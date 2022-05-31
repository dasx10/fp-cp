import arrayLikeFilterCore    from "../core/index";
import arrayLikeFilterIndexes from "../indexes/index";
import arrayLikeFilterRight   from "../right/index";

// interfaces
import type { ArrayLikeFilterLib } from "./index.D";

const arrayLikeFilterLib: ArrayLikeFilterLib = {
	core    : arrayLikeFilterCore,
	right   : arrayLikeFilterRight,
	indexes : arrayLikeFilterIndexes,
}

export default arrayLikeFilterLib;
