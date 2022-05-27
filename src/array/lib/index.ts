// libraries
import arrayLikeLib from '../like/lib/index';

// dependencies
import arrayFilter  from '../filter/index';

// interfaces
import type { ArrayLikeLib } from '../like/lib/index.D';
import type { ArrayLib }     from "./index.D";

const arrayLib: ArrayLib = Object.assign(arrayLikeLib as ArrayLikeLib<readonly unknown[]>, {
	like   : arrayLikeLib,
	filter : arrayFilter,
});

export default arrayLib;
