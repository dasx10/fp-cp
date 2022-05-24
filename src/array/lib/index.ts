// libraries
import arrayLikeLib from "../../arrayLike/lib/index";

// dependencies
import arrayFilter from '../filter/index';

// interfaces
import type { ArrayLikeLib } from './../../arrayLike/lib/index.D';
import type { ArrayLib }     from "./index.D";

const arrayLib: ArrayLib = Object.assign(arrayLikeLib as ArrayLikeLib<readonly unknown[]>, {
	like   : arrayLikeLib,
	filter : arrayFilter,
});

export default arrayLib;
