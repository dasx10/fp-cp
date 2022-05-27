// core
import arrayLikeSomeCore  from "../core/index";
import arrayLikeSomeRight from "../right/index";

// interfaces
import type { ArrayLikeSomeLib } from "./index.D";

const arrayLikeSomeLib: ArrayLikeSomeLib = {
	core  : arrayLikeSomeCore,
	right : arrayLikeSomeRight,
};

export default arrayLikeSomeLib;
