// dependencies
import arrayLikeFilterIndexesCore  from '../core/index';
import arrayLikeFilterIndexesRight from '../right/index';

// interfaces
import type { ArrayLikeFilterIndexesLib } from './index.D';

const arrayLikeFilterIndexesLib: ArrayLikeFilterIndexesLib = {
	core  : arrayLikeFilterIndexesCore,
	right : arrayLikeFilterIndexesRight
}

export default arrayLikeFilterIndexesLib;
