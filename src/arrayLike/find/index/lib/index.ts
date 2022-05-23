// core
import arrayLikeFindIndexCore  from "../core/index";
import arrayLikeFindIndexRight from "../right/index";

// interfaces
import type { ArrayLikeFindIndexLib } from "./index.D";

const arrayLikeFindIndexLib: ArrayLikeFindIndexLib = {
	core  : arrayLikeFindIndexCore,
	right : arrayLikeFindIndexRight,
}

export default arrayLikeFindIndexLib;
