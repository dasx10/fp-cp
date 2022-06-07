// dependencies
import arrayLikeFilterIndexesReversRight from '../../revers/right/index';
import arrayLikeFilterIndexesRightCore from '../core/index';

// interfaces
import { ArrayLikeFilterIndexesRightLib } from './index.D';

const arrayLikeFilterIndexesRightLib: ArrayLikeFilterIndexesRightLib = {
	core   : arrayLikeFilterIndexesRightCore,
	revers : arrayLikeFilterIndexesReversRight,
}

export default arrayLikeFilterIndexesRightLib;
