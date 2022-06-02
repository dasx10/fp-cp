import type { ArrayFilterCore }            from './../core/index.D';

import type { ArrayLikeFilterIndexesMain } from './../indexes/index.D';
import type { ArrayLikeFilterRightMain }   from './../right/index.D';
import type { ArrayLikeFIlterReverseMain } from './../reverse/index.D';

export interface ArrayLikeFilterLib<Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core    : ArrayFilterCore            <Type>;
	readonly right   : ArrayLikeFilterRightMain   <Type>;
	readonly indexes : ArrayLikeFilterIndexesMain <Type>;
	readonly reverse : ArrayLikeFIlterReverseMain <Type>;
}
