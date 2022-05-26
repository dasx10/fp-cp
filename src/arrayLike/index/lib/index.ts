// dependencies
import arrayLikeAtFirstIndex from "../../at/first/index/index";
import arrayLikeFindIndex    from "../../find/index/index";
import arrayLikeIndexHas     from "../has/index";
import arrayLikeIndexOf      from "../of/index";

// interface
import type { ArrayLikeIndexLib } from "./index.D";

const arrayLikeIndexLib: ArrayLikeIndexLib = {
  first : arrayLikeAtFirstIndex,
	has   : arrayLikeIndexHas,
	find  : arrayLikeFindIndex,
  of    : arrayLikeIndexOf,
};

export default arrayLikeIndexLib;
