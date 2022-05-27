// core
import _curry2 from "../../function/curry/2/_/index";
import arrayLikeMinimumCore from "./core/index";

// dependencies
import arrayLikeMinimumRight from "./right/index";

// interfaces
import type { ArrayLikeMinimumDef } from "./index.D";

const arrayLikeMinimumDef: ArrayLikeMinimumDef = _curry2(arrayLikeMinimumCore);
const arrayLikeMinimum = Object.assign(arrayLikeMinimumDef, {
	core  : arrayLikeMinimumCore,
  right : arrayLikeMinimumRight,
});

export default arrayLikeMinimum;
