export type ArrayLikeIsEmptyCore = {
	(x: ArrayLike<unknown>) : boolean;
	<X>(x: X)               : x is X & { length: 0 };
}
