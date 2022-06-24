import type { __ } from "../../../../index";
import type { ArrayLikeConcat, ArrayLikeConcatCore } from "../core/index.D";

export type ArrayLikeConcatDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeConcatCore<Type>
	& {
		<Y extends Type>(y: Y      ): <X extends Type>(x: X) => ArrayLikeConcat<Y, X>;
		<X extends Type>(_:__, x: X): <Y extends Type>(y: Y) => ArrayLikeConcat<Y, X>;
	}
