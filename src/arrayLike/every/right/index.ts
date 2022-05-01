import _curry2 from "../../../function/curry/2/_/index";
import arrayLikeEveryRightCore from "./core/index";
import type { EveryCurryDef } from "../index.D";

const arrayLikeEveryRightDef: EveryCurryDef = _curry2(arrayLikeEveryRightCore);
const arrayLikeEveryRight = Object.assign(arrayLikeEveryRightDef, {
	core: arrayLikeEveryRightCore,
});

export default arrayLikeEveryRight;
