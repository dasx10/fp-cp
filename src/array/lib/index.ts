// libraries
import arrayLikeLib from "../../arrayLike/lib/index";

// interfaces
import type { ArrayLib } from "./index.D";

const arrayLib = Object.assign(arrayLikeLib, {
	like: arrayLikeLib,
}) as ArrayLib;

export default arrayLib;
