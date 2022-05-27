// dependencies
import arrayLikeForEachCore  from "../core/index";
import arrayLikeForEachRight from "../right/index";

// interfaces
import type { ArrayLikeForEachLib } from "./index.D";

const arrayLikeForEachLib: ArrayLikeForEachLib = {
	core  : arrayLikeForEachCore,
	right : arrayLikeForEachRight,
}

export default arrayLikeForEachLib;
