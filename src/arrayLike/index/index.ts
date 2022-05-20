import arrayLikeIndexHas     from "./has/index";
import arrayLikeIndexOf      from "./of/index";
import arrayLikeFindIndex    from "../find/index/index";
import arrayLikeAtFirstIndex from "../at/first/index/index";
import arrayLikeAtLastIndex  from "../at/last/index/index";

const arrayLikeIndex = Object.assign(arrayLikeAtLastIndex, {
  first : arrayLikeAtFirstIndex,
	has   : arrayLikeIndexHas,
	find  : arrayLikeFindIndex,
  of    : arrayLikeIndexOf,
});

export default arrayLikeIndex;
