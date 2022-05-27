// core
import arrayLikeFindEntryCore from "../core/index";
import arrayLikeFindEntryRight from "../right/index";

// interfaces
import type { ArrayLikeFindEntryLib } from "./index.D";

const arrayLikeFindEntryLib: ArrayLikeFindEntryLib = {
	core  : arrayLikeFindEntryCore,
	right : arrayLikeFindEntryRight
}

export default arrayLikeFindEntryLib;
