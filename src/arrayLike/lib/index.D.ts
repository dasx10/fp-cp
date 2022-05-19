
import arrayLikeHead from "../at/head/index";
import arrayLikeTail from "../at/tail/index";
import arrayLikeEvery from "../every/index";
import arrayLikeExclude from "../exclude/index";
import arrayLikeFind from "../find/index";
import arrayLikeForEach from "../forEach/index";
import arrayLikeGroup from "../group/index";
import arrayLikeInclude from "../include/index";
import arrayLikeIndexes from "../indexes/index";
import arrayLikeIs from "../is/index";
import arrayLikeJoin from "../join/index";
import arrayLikeKeys from "../keys/index";
import arrayLikeMaximum from "../maximum/index";
import arrayLikeMinimum from "../minimum/index";
import arrayLikeReduce from "../reduce/index";
import arrayLikeSize from "../size/index";
import arrayLikeSome from "../some/index";
import arrayLikeSum from "../sum/index";
import arrayLikeIndex from "../index/index";

import type { ArrayLikeAtMain }      from "../at/index.D";
import type { ArrayLikeAverageMain } from "../average/index.D";
import type { ArrayLikeCountMain }   from "../count/index.D";

export interface ArrayLikeLib {
	at      : ArrayLikeAtMain,
  average : ArrayLikeAverageMain,
  count   : ArrayLikeCountMain,
	size    : typeof arrayLikeSize,
  head    : typeof arrayLikeHead,
  tail    : typeof arrayLikeTail,
	keys    : typeof arrayLikeKeys,
  index   : typeof arrayLikeIndex,
  indexes : typeof arrayLikeIndexes,

  find    : typeof arrayLikeFind,
  forEach : typeof arrayLikeForEach,
  reduce  : typeof arrayLikeReduce,
  every   : typeof arrayLikeEvery,
  some    : typeof arrayLikeSome,
	group   : typeof arrayLikeGroup,

  sum     : typeof arrayLikeSum,
  maximum : typeof arrayLikeMaximum,
  minimum : typeof arrayLikeMinimum,

	join    : typeof arrayLikeJoin,

  is      : typeof arrayLikeIs,
	include : typeof arrayLikeInclude,
	exclude : typeof arrayLikeExclude,
}
