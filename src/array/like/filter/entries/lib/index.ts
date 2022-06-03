// core
import arrayLikeFilterEntriesCore  from "../core/index";
import arrayLikeFIlterEntriesRight from "../right/index";

// interfaces
import type { ArrayLikeFilterEntriesLib } from "./index.D";

const arrayLikeFilterEntriesLib: ArrayLikeFilterEntriesLib = {
	core  : arrayLikeFilterEntriesCore,
	right : arrayLikeFIlterEntriesRight,
}

export default arrayLikeFilterEntriesLib;
