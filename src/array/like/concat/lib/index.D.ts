import type { ArrayLikeConcatCore } from './../core/index.D';


export interface ArrayLikeConcatLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeConcatCore<Type>
}

