// core
import arrayLikeFilterEntriesDef from "./contract/index";
import arrayLikeFilterEntriesLib from "./lib/index";

// interfaces
import { ArrayLikeFilterEntriesMain } from "./index.D";

const arrayLikeFilterEntries: ArrayLikeFilterEntriesMain = Object.assign(arrayLikeFilterEntriesDef, arrayLikeFilterEntriesLib);
export default arrayLikeFilterEntries;
