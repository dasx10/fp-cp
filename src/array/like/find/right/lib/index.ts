// dependencies
import arrayLikeFindRightCore     from "../core/index";
import arrayLikeFindIndexRight from "../../index/right/index";
import arrayLikeFindEntryRight from "../../entry/right/index";

// interfaces
import type { ArrayLikeFindRightLib } from "./index.D";

const arrayLikeFindRightLib: ArrayLikeFindRightLib = {
	core  : arrayLikeFindRightCore,
	index : arrayLikeFindIndexRight,
	entry : arrayLikeFindEntryRight,
}

export default arrayLikeFindRightLib;
