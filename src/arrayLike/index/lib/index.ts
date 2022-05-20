import arrayLikeAtFirstIndex from "../../at/first/index/index";
import arrayLikeFindIndex    from "../../find/index/index";
import arrayLikeIndexHas     from "../has/index";
import arrayLikeIndexOf      from "../of/index";

const arrayLikeIndex = {
  first : arrayLikeAtFirstIndex,
	has   : arrayLikeIndexHas,
	find  : arrayLikeFindIndex,
  of    : arrayLikeIndexOf,
};

export default arrayLikeIndex;
