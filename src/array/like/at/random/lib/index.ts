import arrayLikeAtRandomEntryCore    from "../entry/index";
import arrayLikeAtRandomIndexCore    from "../index/index";
import type { ArrayLikeAtRandomLib } from "./index.D";

const arrayLikeAtRandomLib: ArrayLikeAtRandomLib = {
	entry: arrayLikeAtRandomEntryCore,
	index: arrayLikeAtRandomIndexCore,
};

export default arrayLikeAtRandomLib;
