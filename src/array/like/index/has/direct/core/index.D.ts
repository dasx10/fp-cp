import type { ArrayIndex }     from './../../../../../array/index.D';
import type { ArrayLikeIndex } from "../../../../index.D";
import type { ToIndexDirect }  from "../../../index.D";

export type ArrayLikeIndexHasDirectCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = {
	<
		Index extends ArrayLikeIndex<X>,
		X     extends ArrayLike<unknown>
	>(index: ToIndexDirect<Index>, x: X): x is (X & { [I in Index]: unknown });

	<
		Index extends ArrayLikeIndex<X>,
		X     extends readonly unknown[]
	>(index: ToIndexDirect<Index>, x: X): number extends Index 
		? boolean
		: X extends readonly unknown[] 
			? Index extends ArrayIndex<X>
				? true
				: boolean
		: boolean;
};
