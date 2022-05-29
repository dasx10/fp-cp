export type ArrayLikeIsCore = {
	(x: ArrayLike<unknown>): true;
	<X extends number | boolean | symbol | undefined | null | bigint | Number | Boolean | Symbol | BigInt>(x: X): false;
	(x: unknown): x is ArrayLike<unknown>;
}
