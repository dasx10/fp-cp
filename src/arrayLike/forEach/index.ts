import _curry2              from "../../function/curry/2/_/index";
import arrayLikeForEachCore from "./core/index";

// dependencies
import arrayLikeForEachRight from "./right/index";

// interfaces
import type { ArrayLikeForEachDef } from "./index.D";

const arrayLikeForEachDef: ArrayLikeForEachDef = _curry2(arrayLikeForEachCore);
const arrayLikeForEach = Object.assign(arrayLikeForEachDef, {
	core : arrayLikeForEachCore,
  right: arrayLikeForEachRight
});

export default arrayLikeForEach;
