export type ArrayLikeIsNoEmptyCore = {
	(x: ArrayLike<unknown>) : boolean;
	<X>(x: X)               : x is X & { length: number };
}
