// core
import _curry2            from "../../function/curry/2/_/index";
import arrayLikeGroupCore from "./core/index";

// dependencies
import { ArrayLikeGroupDef } from "./index.D";

const arrayLikeGroupDef: ArrayLikeGroupDef = _curry2(arrayLikeGroupCore);

const arrayLikeGroup = Object.assign(arrayLikeGroupDef, {
	core: arrayLikeGroupDef,
});

export default arrayLikeGroup;
