// dependencies
import arrayLikeAtRightCore from "../core/index";
import arrayLikeAtFirst     from "../../first/index";
import arrayLikeAtLast      from "../../last/index";

// interfaces
import type { ArrayLikeAtRightLib } from "./index.D";

const arrayLikeAtRightLib: ArrayLikeAtRightLib = {
	core  : arrayLikeAtRightCore,
	last  : arrayLikeAtFirst,
	first : arrayLikeAtLast,
};

export default arrayLikeAtRightLib;
