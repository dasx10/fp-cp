// dependencies
import arrayLikeAtDirectCore         from "../core/index";
import arrayLikeAtDirectIndex        from "../index/index";

// interfaces
import type { ArrayLikeAtDirectLib } from "./index.D";

const arrayLikeAtDirectLib: ArrayLikeAtDirectLib = {
	core  : arrayLikeAtDirectCore,
	index : arrayLikeAtDirectIndex,
}

export default arrayLikeAtDirectLib;
