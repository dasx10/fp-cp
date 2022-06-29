import type { ArrayLikeValue } from "../../index.D";

export type ArrayLikeSelect <Indexes extends readonly number[], X extends ArrayLike<unknown>> = ArrayLikeValue<X>[] | [];

export type ArrayLikeSelectCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	<Indexes extends readonly number[], X extends Type>() => ArrayLikeSelect<Indexes, X>;
