import type { ArrayLikeFindIndexMain } from './../../find/index/index.D';
import type { ArrayLikeAtFirstIndexCore } from './../../at/first/index/index.D';
import type { ArrayLikeIndexOfMain } from './../of/index.D';
import type { ArrayLikeIndexHasMain } from './../has/index.D';
export interface ArrayLikeIndexLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly has   : ArrayLikeIndexHasMain     <Type>;
	readonly of    : ArrayLikeIndexOfMain      <Type>;
	readonly first : ArrayLikeAtFirstIndexCore <Type>;
	readonly find  : ArrayLikeFindIndexMain    <Type>;
}
