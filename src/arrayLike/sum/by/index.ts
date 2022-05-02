// core
import _curry2 from "../../../function/curry/2/_/index";
import arrayLikeSumByCore  from "./core/index";

// interfaces
import type { ArrayLikeSumByDef } from "./index.D";

const arrayLikeSumByDef: ArrayLikeSumByDef = _curry2(arrayLikeSumByCore);

const arrayLikeSumBy = Object.assign(arrayLikeSumByDef, {
	core: arrayLikeSumByCore,
});

export default arrayLikeSumBy;
