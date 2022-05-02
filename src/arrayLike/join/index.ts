// core
import _curry2 from "../../function/curry/2/_/index";
import arrayLikeJoinCore   from "./core/index";

// dependencies
import arrayLikeJoinUp from "./up/index";

// interfaces
import { ArrayLikeJoinDef } from "./index.D";

const arrayLikeJoinDef = _curry2(arrayLikeJoinCore) as ArrayLikeJoinDef;
const arrayLikeJoin = Object.assign(arrayLikeJoinDef, {
	core : arrayLikeJoinCore,
	up   : arrayLikeJoinUp
});

export default arrayLikeJoin;
