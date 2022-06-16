import _curry2 from "../../../../../function/curry/2/_/index";
import arrayLikeCounSomeCore from "../core/index";

import type { ArrayLikeCountIncludesDef } from "./index.D";

const arrayLikeCountIncludesDef = _curry2(arrayLikeCounSomeCore) as ArrayLikeCountIncludesDef;

export default arrayLikeCountIncludesDef;
