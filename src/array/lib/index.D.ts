import type { ArrayLikeLib } from "../../arrayLike/lib/index.D";

export interface ArrayLib extends ArrayLikeLib<Array<any>> {
	like: ArrayLikeLib;
}
