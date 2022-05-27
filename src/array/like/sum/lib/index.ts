// dependencies
import arrayLikeSumCore from "../core/index";
import arrayLikeSumRight from "../right/index";

// interfaces
import type { ArrayLikeSumLib } from "./index.D";


const arrayLikeSumLib: ArrayLikeSumLib = {
	core  : arrayLikeSumCore,
	right : arrayLikeSumRight,
}

export default arrayLikeSumLib;
