// dependencies
import arrayLikeIncludesCore from "../core/index";
import arrayLikeIncludesLast from "../last/index";

// interfaces
import type { ArrayLikeIncludesLib } from "./index.D";

const arrayLikeIncludesLib: ArrayLikeIncludesLib = {
	core: arrayLikeIncludesCore,
	last: arrayLikeIncludesLast,
}

export default arrayLikeIncludesLib;
