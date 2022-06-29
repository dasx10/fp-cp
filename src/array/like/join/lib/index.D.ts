import type { ArrayLikeJoinByMain } from '../by/index.D';
import type { ArrayLikeJoinUpCore } from '../up/index.D';
import type { ArrayLikeJoinCore }   from './../core/index.D';
export interface ArrayLikeJoinLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeJoinCore   <Type>;
	readonly up  : ArrayLikeJoinUpCore <Type>;
	readonly by  : ArrayLikeJoinByMain <Type>;
}
