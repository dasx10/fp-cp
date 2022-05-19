// core
<<<<<<< HEAD
import arrayLikeAtDirectCore  from "../direct/core/index";
=======
import arrayLikeAtDirectCore from "../direct/core/index";
>>>>>>> origin/dd2
import arrayLikeAtInvertCore from "../invert/core/index";

import type {
	ToIndex,
	ToIndexDirect,
	ToIndexInvert
} from "../../index/index.D";

import type { ArrayLikeAtCore } from "./index.D";

const arrayLikeAtCore: ArrayLikeAtCore = <Index extends number, X extends ArrayLike<any>>(index: ToIndex<Index>, x: X) => index < 0 
		? arrayLikeAtInvertCore (<ToIndexInvert<Index>> index, x)
<<<<<<< HEAD
		: arrayLikeAtDirectCore  (<ToIndexDirect <Index>> index, x);
=======
		: arrayLikeAtDirectCore (<ToIndexDirect <Index>> index, x);
>>>>>>> origin/dd2

export default arrayLikeAtCore;
