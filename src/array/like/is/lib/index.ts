// dependencies
import arrayLikeIsEmptyCore    from "../empty/index";
import arrayLikeIsNotEmptyCore from "../notEmpty/index";

// interfaces
import type { ArrayLikeIsLib } from "./index.D";

const arrayLikeIsLib: ArrayLikeIsLib = {
	empty   : arrayLikeIsEmptyCore,
	noEmpty : arrayLikeIsNotEmptyCore,
}

export default arrayLikeIsLib;
