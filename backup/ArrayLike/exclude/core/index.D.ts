import type { ArrayLikeValue } from '../../../../src/arrayLike/index.D';
export type ArrayLikeExcludeCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(value: ArrayLikeValue<X>, x: X) => boolean
