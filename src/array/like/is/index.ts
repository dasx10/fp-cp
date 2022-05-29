// core
import arrayLikeIsCore from "./core/index";
import arrayLikeIsLib  from './lib/index';

// interfaces
import { ArrayLikeIsMain } from './index.D';

const arrayLikeIs: ArrayLikeIsMain = Object.assign(arrayLikeIsCore, arrayLikeIsLib);

export default arrayLikeIs;
