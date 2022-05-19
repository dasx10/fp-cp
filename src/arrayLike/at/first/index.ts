// core
import arrayLikeAtFirstCore from './core/index';
import arrayLikeAtFirstLib  from './lib/index';

// interface
import type { ArrayLikeAtFirstMain } from './index.D';

const arrayLikeAtFirst: ArrayLikeAtFirstMain = Object.assign(arrayLikeAtFirstCore, arrayLikeAtFirstLib);
export default arrayLikeAtFirst;
