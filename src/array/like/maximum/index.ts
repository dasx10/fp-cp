// core
import _curry2              from "../../function/curry/2/_/index";
import arrayLikeMaximumCore from "./core/index";

// interfaces
import type { ArrayLikeMaximumDef } from "./index.D";

// dependencies
import arrayLikeMaximumRight from "./right/index";
import arrayLikeMaximumOf    from "./of/index";

const arrayLikeMaximumDef: ArrayLikeMaximumDef = _curry2(arrayLikeMaximumCore);
const arrayLikeMaximum = Object.assign(arrayLikeMaximumDef, {
	of    : arrayLikeMaximumOf,
  right : arrayLikeMaximumRight,
});

export default arrayLikeMaximum;
