import _curry2 from "../../../function/curry/2/_/index";
import arrayLikeCountRightCore from "./core/index";

const arrayLikeCountRightDef = _curry2(arrayLikeCountRightCore);
const arrayLikeCountRight = Object.assign(arrayLikeCountRightDef, {
	core: arrayLikeCountRightCore,
});

export default arrayLikeCountRight;
