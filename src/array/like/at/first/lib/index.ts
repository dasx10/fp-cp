// core
import arrayLikeAtFirstEntry from "../entry/index";
import arrayLikeAtFirstIndex from "../index/index";

// interfaces
import type { ArrayLikeAtFirstLib } from "./index.D";

const arrayLikeAtFirstLib: ArrayLikeAtFirstLib = {
	entry: arrayLikeAtFirstEntry,
	index: arrayLikeAtFirstIndex,
}

export default arrayLikeAtFirstLib;
