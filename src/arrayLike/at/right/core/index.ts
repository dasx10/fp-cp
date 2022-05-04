import type { ToIndexRight } from '../../../index/index.D';
import type { ArrayLikeAtRightCore } from './index.D';

const arrayLikeAtRightCore: ArrayLikeAtRightCore = <Index extends number, X extends ArrayLike<any>>(index: ToIndexRight<Index>, arrayLike: X) => arrayLike[arrayLike.length + index];
export default arrayLikeAtRightCore;
