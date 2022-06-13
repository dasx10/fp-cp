// dependencies
import arrayLikeCountCore  from "../core/index";
import arrayLikeCountRight from "../right/index";
import arrayLikeCountOf    from "../of/index";
import arrayLikeCountSome  from "../some/index";

// interfaces
import type { ArrayLikeCountLib } from './index.D';

// initial
const arrayLikeCountLib: ArrayLikeCountLib = {
	core  : arrayLikeCountCore,
	right : arrayLikeCountRight,
	some  : arrayLikeCountSome,
	of    : arrayLikeCountOf,
}

export default arrayLikeCountLib;
