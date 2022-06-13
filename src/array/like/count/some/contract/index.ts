import _curry2 from "../../../../../function/curry/2/_/index";
import arrayLikeCounSomeCore from "../core/index";

import type { ArrayLikeCountSomeDef } from "./index.D";

const arrayLikeCountSomeDef = _curry2(arrayLikeCounSomeCore) as ArrayLikeCountSomeDef;

export default arrayLikeCountSomeDef;
