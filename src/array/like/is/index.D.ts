import type { ArrayLikeIsCore } from './core/index.D';
import type { ArrayLikeIsLib }  from './lib/index.D';
export type ArrayLikeIsMain = ArrayLikeIsCore & ArrayLikeIsLib;
