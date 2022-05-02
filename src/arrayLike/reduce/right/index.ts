import _curry3 from "../../../function/curry/3/_/index";
import arrayLikeReduceRightCore from "./core/index";
import type { ReduceArrayLikeRightDef } from "./index.D";

const arrayLikeReduceRightDef: ReduceArrayLikeRightDef = _curry3(arrayLikeReduceRightCore);
const arrayLikeReduceRight = Object.assign(arrayLikeReduceRightDef, {
	core: arrayLikeReduceRightCore,
});
export default arrayLikeReduceRight;
