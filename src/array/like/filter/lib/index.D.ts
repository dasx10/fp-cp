import type { ArrayLikeFilterIndexesMain } from './../indexes/index.D';
import type { ArrayFilterCore }          from './../core/index.D';
import type { ArrayLikeFilterRightMain } from './../right/index.D';

export interface ArrayLikeFilterLib<Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core    : ArrayFilterCore            <Type>;
	readonly right   : ArrayLikeFilterRightMain   <Type>;
	readonly indexes : ArrayLikeFilterIndexesMain <Type>;
}
