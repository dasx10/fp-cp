import _curry2 from "../../../function/curry/2/_/index";
import arrayLikeIndexHasCore from "./core/index";

const arrayLikeIndexHasDef = _curry2(arrayLikeIndexHasCore);

const arrayLikeIndexHas = Object.assign(arrayLikeIndexHasDef, {
	core: arrayLikeIndexHasCore,
});

export default arrayLikeIndexHas;
