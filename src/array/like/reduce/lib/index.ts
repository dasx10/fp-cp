// core
import arrayLikeReduceCore  from "../core/index";
import arrayLikeReduceRight from "../right/index";

// interfaces
import type { ArrayLikeReduceLib } from "./index.D";

const arrayLikeReduceLib: ArrayLikeReduceLib = {
	core  : arrayLikeReduceCore,
	right : arrayLikeReduceRight,
};

export default arrayLikeReduceLib;
