import arrayLikeAtLeftCore  from "../left/_/index";
import arrayLikeAtRightCore from "../right/_/index";

import type {
	ToIndex,
	ToIndexLeft,
	ToIndexRight
} from "../../index/index.D";

function arrayLikeCore <Index extends number, X extends ArrayLike<any>>(index: ToIndex<Index>, x: X) {
  return index < 0 
		? arrayLikeAtRightCore (<ToIndexRight<Index>> index, x)
		: arrayLikeAtLeftCore  (<ToIndexLeft <Index>> index, x);
}

export default arrayLikeCore;
