import _curry2 from "../../../function/curry/2/_/index";
import arrayLikeSumRightCore from "./core/index";
import type { ArrayLikeSumLikeDef } from "../index.D";

const arrayLikeSumRightDef: ArrayLikeSumLikeDef = _curry2(arrayLikeSumRightCore);
const arrayLikeSumRight = Object.assign(arrayLikeSumRightDef, {
	core: arrayLikeSumRightCore,
});

export default arrayLikeSumRight;
