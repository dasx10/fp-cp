// core
import arrayLikeAtLeftCore  from "../left/core/index";
import arrayLikeAtRightCore from "../right/core/index";

import type {
	ToIndex,
	ToIndexLeft,
	ToIndexRight
} from "../../index/index.D";

import type { ArrayLikeAtCore } from "./index.D";

const arrayLikeAtCore: ArrayLikeAtCore = <Index extends number, X extends ArrayLike<any>>(index: ToIndex<Index>, x: X) => index < 0 
		? arrayLikeAtRightCore (<ToIndexRight<Index>> index, x)
		: arrayLikeAtLeftCore  (<ToIndexLeft <Index>> index, x);

export default arrayLikeAtCore;
