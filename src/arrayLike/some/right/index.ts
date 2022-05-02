import _curry2 from "../../../function/curry/2/_/index";
import { SomeCurryDef } from "../index.D";
import arrayLikeSomeRightCore from "./core/index";

const arrayLikeSomeRightDef: SomeCurryDef = _curry2(arrayLikeSomeRightCore);
const arrayLikeSomeRight = Object.assign(arrayLikeSomeRightDef, {
	core: arrayLikeSomeRightCore,
});

export default arrayLikeSomeRight;
