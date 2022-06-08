import arrayLikeFilterEntriesReversDef from "./contract/index";
import arrayLikeFilterEntriesReversLib from "./lib/index";

// interfaces
import type { ArrayLikeFilterEntriesReversMain } from "./index.D";

const arrayLikeFilterEntriesRevers: ArrayLikeFilterEntriesReversMain = Object.assign(arrayLikeFilterEntriesReversDef, arrayLikeFilterEntriesReversLib);
export default arrayLikeFilterEntriesRevers;
