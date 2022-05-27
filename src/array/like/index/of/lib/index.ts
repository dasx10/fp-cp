// core
import arrayLikeIndexOfCore from "../core/index";
import arrayLikeIndexOfLast from "../last/index";

// interfaces
import type { ArrayLikeIndexOfLib } from "./index.D";


const arrayLikeIndexOfLib: ArrayLikeIndexOfLib = {
	core: arrayLikeIndexOfCore,
	last: arrayLikeIndexOfLast,
};

export default arrayLikeIndexOfLib;
