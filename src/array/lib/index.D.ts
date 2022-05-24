import type { ArrayFilterMain } from './../filter/index.D';
import type { ArrayLikeLib }    from "../../arrayLike/lib/index.D";

export interface ArrayLib<Type = unknown> extends ArrayLikeLib<readonly Type[]> {
	readonly like   : ArrayLikeLib;
	readonly filter : ArrayFilterMain<Type>
}
