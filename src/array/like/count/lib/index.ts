// dependencies
import arrayLikeCountCore  from "../core/index";
import arrayLikeCountRight from "../right/index";
import arrayLikeCountOf    from "../of/index";
import arrayLikeCountIncludes  from "../includes/index";

// interfaces
import type { ArrayLikeCountLib } from './index.D';

// initial
const arrayLikeCountLib: ArrayLikeCountLib = {
	core     : arrayLikeCountCore,
	right    : arrayLikeCountRight,
	includes : arrayLikeCountIncludes,
	of       : arrayLikeCountOf,
}

export default arrayLikeCountLib;
