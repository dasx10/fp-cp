import arrayLikeIsArrayLike from "./arrayLike/index";
import arrayLikeIsEmpty     from "./empty/index";
import arrayLikeIsNotEmpty  from "./notEmpty/index";

import arrayIs from "../../../backup/array/is/index";


const arrayLikeIs = Object.assign(arrayLikeIsArrayLike, {
  empty    : arrayLikeIsEmpty,
	notEmpty : arrayLikeIsNotEmpty,
	array    : arrayIs,
});

export default arrayLikeIs;
