import type { ArrayLikeIndexLib } from './lib/index.D';
import type { ArrayLikeAtLastIndexCore } from "../at/last/index/index.D";
import type { ExcludeFloat, ExcludeNegative, ExcludePositive } from '../../../number/index.D';

export type KeyIndex = number | `${number}`;

export type ToIndex       <X extends number> = (ExcludeFloat<X>);
export type ToIndexDirect <X extends number> = (ToIndex<X> & ExcludeNegative<X>);
export type ToIndexInvert <X extends number> = (ToIndex<X> & ExcludePositive<X>);

export type ArrayLikeIndexMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeAtLastIndexCore<Type> & ArrayLikeIndexLib<Type>;
