// core
import arrayLikeGroupCore from "../core/index";
import arrayLikeGroupRight from "../right/index";

// interfaces
import type { ArrayLikeGroupLib } from "./index.D";

const arrayLikeGroupLib: ArrayLikeGroupLib = {
	core  : arrayLikeGroupCore,
	right : arrayLikeGroupRight,
};

export default arrayLikeGroupLib;
