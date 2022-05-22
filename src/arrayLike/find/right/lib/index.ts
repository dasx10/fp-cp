// dependencies
import arrayLikeFindRightCore     from "../core/index";
import arrayLikeFindIndexRightDef from "../../index/right/contract/index";

// interfaces
import type { ArrayLikeFindRightLib } from "./index.D";

const arrayLikeFindRightLib: ArrayLikeFindRightLib = {
	core  : arrayLikeFindRightCore,
	index : arrayLikeFindIndexRightDef,
}

export default arrayLikeFindRightLib;
