// dependencies
import arrayLikeFilterEntriesReversRight from '../../revers/right/index';
import arrayLikeFilterEntriesRightCore from '../core/index';

// interfaces
import type { ArrayLikeFilterEntriesRightLib } from './index.D';

const arrayLikeFilterEntriesRightLib: ArrayLikeFilterEntriesRightLib = {
	core   : arrayLikeFilterEntriesRightCore,
	revers : arrayLikeFilterEntriesReversRight,
}

export default arrayLikeFilterEntriesRightLib;
