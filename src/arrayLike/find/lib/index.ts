import arrayLikeFindCore  from "../core/index";
import arrayLikeFindEntry from "../entry/index";
import arrayLikeFindIndex from "../index/index";
import arrayLikeFindRight from "../right/index";

// interfaces
import type { ArrayLikeFindLib } from "./index.D";

const arrayLikeFindLib: ArrayLikeFindLib = {
	core : arrayLikeFindCore,
  index: arrayLikeFindIndex,
  right: arrayLikeFindRight,
	entry: arrayLikeFindEntry,
}

export default arrayLikeFindLib;
