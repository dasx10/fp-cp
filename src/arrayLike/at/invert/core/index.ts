import type { ToIndexInvert } from '../../../index/index.D';
import type { ArrayLikeAtInvertCore } from './index.D';

const arrayLikeAtInvertCore: ArrayLikeAtInvertCore = <Index extends number, X extends ArrayLike<any>>(index: ToIndexInvert<Index>, arrayLike: X) => arrayLike[arrayLike.length + index];
export default arrayLikeAtInvertCore;
