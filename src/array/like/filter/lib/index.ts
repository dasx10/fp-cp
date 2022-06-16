import arrayLikeCount          from "../../count/index";
import arrayLikeFilterCore     from "../core/index";
import arrayLikeFilterEntries  from "../entries/index";
import arrayLikeFilterIndexes  from "../indexes/index";
import arrayLikeFilterOf       from "../of/index";
import arrayLikeFilterRevers   from "../revers/index";
import arrayLikeFilterRight    from "../right/index";
import arrayLikeFilterIncludes from "../includes/index";

// interfaces
import type { ArrayLikeFilterLib } from "./index.D";

const arrayLikeFilterLib: ArrayLikeFilterLib = {
	core     : arrayLikeFilterCore,
	right    : arrayLikeFilterRight,
	indexes  : arrayLikeFilterIndexes,
	entries  : arrayLikeFilterEntries,
	revers   : arrayLikeFilterRevers,
	of       : arrayLikeFilterOf,
	includes : arrayLikeFilterIncludes,
	size     : arrayLikeCount,
}

export default arrayLikeFilterLib;
