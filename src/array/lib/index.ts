// libraries

// interfaces
import arrayLikeLib from "../../arrayLike/lib/index";
import type { ArrayLib } from "./index.D";

const arrayLib: ArrayLib = Object.assign(arrayLikeLib, {
	like: arrayLikeLib,
});

export default arrayLib;
