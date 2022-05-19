// core
import arrayLikeAtLastCore from './core/index';
import arrayLikeAtLastLib  from './lib/index';

// interfaces
import type { ArrayLikeAtLastMain } from './index.D';

const arrayLikeAtLast: ArrayLikeAtLastMain = Object.assign(arrayLikeAtLastCore, arrayLikeAtLastLib);

export default arrayLikeAtLast;
