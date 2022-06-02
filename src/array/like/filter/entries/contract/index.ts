// core
import _curry2                    from "../../../../../function/curry/2/_/index";
import arrayLikeFilterEntriesCore from "../core/index";

// interfaces
import { ArrayLikeFilterEntriesDef } from "./index.D";

const arrayLikeFilterEntriesDef = _curry2(arrayLikeFilterEntriesCore) as ArrayLikeFilterEntriesDef;
export default arrayLikeFilterEntriesDef;
