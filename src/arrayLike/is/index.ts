import arrayLikeIsCore     from "./core/index";
import arrayLikeIsEmpty    from "./empty/index";
import arrayLikeIsNotEmpty from "./notEmpty/index";
// import isNot from "./not/index";


const is = Object.assign(arrayLikeIsCore, {
  empty    : arrayLikeIsEmpty,
	notEmpty : arrayLikeIsNotEmpty,
});

export default is;
