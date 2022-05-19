import type { placeholder } from '../../../index';
import type { ArrayLikeIndex, ArrayLikeValue } from '../../index.D';
import type { ArrayLikeCountCore } from './../core/index.D';

export type ArrayLikeCountDef = ArrayLikeCountCore & {
	<Value>(def: (value: Value, index: number, arrayLike: ArrayLike<Value>) => any): <X extends ArrayLike<Value>>(x: X) => number;
	<X extends ArrayLike<any>>(_: placeholder, x: X): (def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => any) => number;
};
