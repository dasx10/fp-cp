import type { placeholder }             from './../../../../index';
import type { ArrayLikeCountValueCore } from "../core/index.D";
import type { ArrayLikeValue }          from '../../../index.D';

export type ArrayLikeCountValueDef = ArrayLikeCountValueCore & {
	<FindValue>(findValue: FindValue): <X extends ArrayLike<FindValue>>(x: X) => number;
	<X extends ArrayLike<unknown>>(_: placeholder, x: X): <Value extends ArrayLikeValue<X>> (value: Value) => number;
};


