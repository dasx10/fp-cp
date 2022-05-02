// core
import arrayLikeCore    from "./at/core/index";

// dependencies
import arrayLikeAt      from "./at/index";
import arrayLikeHead    from "./at/head/index";
import arrayLikeTail    from "./at/tail/index";
import arrayLikeIndex   from "./index/index";

import arrayLikeFind    from "./find/index";
import arrayLikeForEach from "./forEach/index";

import arrayLikeReduce  from "./reduce/index";

import arrayLikeEvery   from "./every/index";
import arrayLikeSome    from "./some/index";

import arrayLikeCount   from "./count/index";
import arrayLikeSum     from "./sum/index";
import arrayLikeAverage from "./average/index";
import arrayLikeSize    from "./size/index";
import arrayLikeMaximum from "./maximum/index";
import arrayLikeMinimum from "./minimum/index";

import arrayLikeIndexes from "./indexes/index";

import arrayLikeKeys    from "./keys/index";
import arrayLikeGroup   from "./group/index";
import arrayLikeJoin    from "./join/index";

import arrayLikeInclude from "./include/index";
import arrayLikeIs      from "./is/index";
import arrayLikeExclude from "./exclude/index";


const arrayLike = Object.assign(arrayLikeCore, {
  at      : arrayLikeAt,

  size    : arrayLikeSize,
  head    : arrayLikeHead,
  tail    : arrayLikeTail,
	keys    : arrayLikeKeys,
  index   : arrayLikeIndex,
  indexes : arrayLikeIndexes,

  find    : arrayLikeFind,
  forEach : arrayLikeForEach,
  reduce  : arrayLikeReduce,
  every   : arrayLikeEvery,
  some    : arrayLikeSome,
	group   : arrayLikeGroup,

  count   : arrayLikeCount,
  sum     : arrayLikeSum,
  average : arrayLikeAverage,
  maximum : arrayLikeMaximum,
  minimum : arrayLikeMinimum,

	join    : arrayLikeJoin,

  is      : arrayLikeIs,
	include : arrayLikeInclude,
	exclude : arrayLikeExclude,
});

export default arrayLike;
