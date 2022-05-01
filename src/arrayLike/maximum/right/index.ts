// core
import _curry2 from "../../../function/curry/2/_/index";
import arrayLikeMaximumRightCore from "./core/index";

// interfaces
import type { ArrayLikeMaximumRightDef } from "./index.D";


const arrayLikeMaximumRightDef: ArrayLikeMaximumRightDef = _curry2(arrayLikeMaximumRightCore);
const arrayLikeMaximumRight = Object.assign(arrayLikeMaximumRightDef, {
	core: arrayLikeMaximumRightCore,
});


export default arrayLikeMaximumRight;
