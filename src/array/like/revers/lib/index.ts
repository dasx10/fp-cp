import arrayLikeFilterRevers from "../../filter/revers/index";
import arrayLikeMapRevers    from "../../map/index";

// interfaces
import type { ArrayLikeReversLib } from "./index.D";

const arrayLikeReversLib: ArrayLikeReversLib = {
	filter : arrayLikeFilterRevers,
	map    : arrayLikeMapRevers 
}

export default arrayLikeReversLib;
