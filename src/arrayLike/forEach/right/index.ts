import _curry2 from "../../../function/curry/2/_/index";
import arrayLikeForEachRightCore from "./core/index";

const arrayLikeForEachRightDef = _curry2(arrayLikeForEachRightCore);
const arrayLikeForEachRight = Object.assign(arrayLikeForEachRightDef, {
	core: arrayLikeForEachRightCore,
});
export default arrayLikeForEachRight;
