// libraries
import arrayLikeLib from '../like/lib/index';

// dependencies
import arrayFilter  from '../filter/index';

// interfaces
import type { ArrayLib } from "./index.D";

const arrayLib: ArrayLib = Object.assign(arrayLikeLib, {
	like   : arrayLikeLib,
	filter : arrayFilter,
});

export default arrayLib;
