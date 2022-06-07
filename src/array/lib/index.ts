// libraries
import arrayLikeLib from '../like/lib/index';

// dependencies

// interfaces
import type { ArrayLib } from "./index.D";

const arrayLib: ArrayLib = Object.assign(arrayLikeLib, {
	like   : arrayLikeLib,
});

export default arrayLib;
