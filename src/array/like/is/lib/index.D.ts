// interfaces
import type { ArrayLikeIsNoEmptyCore } from './../notEmpty/index.D';
import type { ArrayLikeIsEmptyCore }   from './../empty/index.D';

export interface ArrayLikeIsLib {
	readonly empty   : ArrayLikeIsEmptyCore;
	readonly noEmpty : ArrayLikeIsNoEmptyCore;
}
