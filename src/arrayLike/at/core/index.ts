// core
import arrayLikeAtDirectCore  from "../direct/core/index";
import arrayLikeAtInvertCore from "../invert/core/index";

import type {
	ToIndex,
	ToIndexDirect,
	ToIndexInvert
} from "../../index/index.D";

import type { ArrayLikeAtCore } from "./index.D";

const arrayLikeAtCore: ArrayLikeAtCore = <Index extends number, X extends ArrayLike<any>>(index: ToIndex<Index>, x: X) => index < 0 
		? arrayLikeAtInvertCore (<ToIndexInvert<Index>> index, x)
		: arrayLikeAtDirectCore  (<ToIndexDirect <Index>> index, x);

export default arrayLikeAtCore;
