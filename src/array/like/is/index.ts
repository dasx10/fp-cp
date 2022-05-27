import arrayLikeIsArrayLike from "./arrayLike/index";
import arrayLikeIsEmpty     from "./empty/index";
import arrayLikeIsNotEmpty  from "./notEmpty/index";



const arrayLikeIs = Object.assign(arrayLikeIsArrayLike, {
  empty    : arrayLikeIsEmpty,
	notEmpty : arrayLikeIsNotEmpty,
});

export default arrayLikeIs;
