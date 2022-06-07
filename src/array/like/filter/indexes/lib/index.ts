// dependencies
import arrayLikeFilterIndexesCore  from '../core/index';
import arrayLikeFilterIndexesRevers from '../revers/index';
import arrayLikeFilterIndexesRight from '../right/index';

// interfaces
import type { ArrayLikeFilterIndexesLib } from './index.D';

const arrayLikeFilterIndexesLib: ArrayLikeFilterIndexesLib = {
	core  : arrayLikeFilterIndexesCore,
	right : arrayLikeFilterIndexesRight,
	revers: arrayLikeFilterIndexesRevers,
}

export default arrayLikeFilterIndexesLib;
