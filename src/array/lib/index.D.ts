import type { ArrayLikeLib } from '../like/lib/index.D';
import type { ArrayFilterMain } from './../filter/index.D';

export interface ArrayLib<Type = unknown> extends ArrayLikeLib<readonly Type[]> {
	readonly like   : ArrayLikeLib;
	// readonly filter : ArrayFilterMain<Type>
}
