import type { ToIndexDirect } from './../../../index/index.D';
import type { ArrayLikeIndex, ArrayLikeValue } from './../../../index.D';

const arrayLikeFilterLimit = <Index extends ArrayLikeIndex<X>, X extends ArrayLike<unknown>>(
	limit : ToIndexDirect<Index>,
	def   : (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => unknown,
	x     : X
) => {
	
}

export default arrayLikeFilterLimit;
