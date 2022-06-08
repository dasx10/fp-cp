// core
import arrayLikeFilterEntriesCore  from "../core/index";
import arrayLikeFilterEntriesRevers from "../revers/index";
import arrayLikeFIlterEntriesRight from "../right/index";

// interfaces
import type { ArrayLikeFilterEntriesLib } from "./index.D";

const arrayLikeFilterEntriesLib: ArrayLikeFilterEntriesLib = {
	core   : arrayLikeFilterEntriesCore,
	right  : arrayLikeFIlterEntriesRight,
	revers : arrayLikeFilterEntriesRevers,
}

export default arrayLikeFilterEntriesLib;
