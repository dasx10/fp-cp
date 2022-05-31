import type { ArrayLikeLib } from '../like/lib/index.D';

export interface ArrayLib<Type = unknown> extends ArrayLikeLib<readonly Type[]> {
	readonly like   : ArrayLikeLib;
}
