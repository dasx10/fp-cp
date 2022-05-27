// dependencies
import arrayLikeCountCore  from "../core/index";
import arrayLikeCountRight from "../right/index";
import arrayLikeCountValue from "../value/index";

// interfaces
import type { ArrayLikeCountLib } from './index.D';

// initial
const arrayLikeCountLib: ArrayLikeCountLib = {
	core  : arrayLikeCountCore,
	right : arrayLikeCountRight,
	value : arrayLikeCountValue,
}

export default arrayLikeCountLib;
