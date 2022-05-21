import type { ArrayLikeLib } from "../../arrayLike/lib/index.D";

export interface ArrayLib extends ArrayLikeLib<readonly unknown[]> {
	readonly like: ArrayLikeLib;
}
