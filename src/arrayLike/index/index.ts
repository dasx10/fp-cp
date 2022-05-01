import arrayLikeIndexLast  from "./last/index";
import arrayLikeIndexFirst from "./first/index";
import arrayLikeIndexHas   from "./has/index";
import arrayLikeIndexOf    from "./of/index";
import arrayLikeFindIndex  from "../find/index/index";

const arrayLikeIndex = Object.assign(arrayLikeIndexLast, {
  first : arrayLikeIndexFirst,
	has   : arrayLikeIndexHas,
	find  : arrayLikeFindIndex,
  of    : arrayLikeIndexOf,
});

export default arrayLikeIndex;
