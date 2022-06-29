// dependencies
import arrayLikeJoinBy   from "../by/index";
import arrayLikeJoinCore from "../core/index";
import arrayLikeJoinUp   from "../up/index";

// interfaces
import type  { ArrayLikeJoinLib } from "./index.D";

const arrayLikeJoinLib: ArrayLikeJoinLib = {
	core : arrayLikeJoinCore,
	up   : arrayLikeJoinUp,
	by   : arrayLikeJoinBy,
}

export default arrayLikeJoinLib;
