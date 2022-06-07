import arrayLikeAtFirst from "../at/first/index";
import arrayLikeAt      from "../at/index";
import arrayLikeAverage from "../average/index";
import arrayLikeCount   from "../count/index";
import arrayLikeEvery   from "../every/index";
import arrayLikeFilter  from "../filter/index";
import arrayLikeFind    from "../find/index";
import arrayLikeForEach from "../forEach/index";
import arrayLikeGroup   from "../group/index";
import arrayLikeIndex   from "../index/index";
import arrayLikeIndexes from "../indexes/index";
import arrayLikeIs      from "../is/index";
import arrayLikeJoin    from "../join/index";
import arrayLikeKeys    from "../keys/index";
import arrayLikeLast    from "../last/index";
import arrayLikeMaximum from "../maximum/index";
import arrayLikeMinimum from "../minimum/index";
import arrayLikeReduce  from "../reduce/index";
import arrayLikeSize    from "../size/index";
import arrayLikeSome    from "../some/index";
import arrayLikeSum     from "../sum/index";
import arrayLikeUniq    from "../uniq/index";
import arrayLikeReject  from '../reject/index';

import type { ArrayLikeLib } from "./index.D";

const arrayLikeLib: ArrayLikeLib = {
	at      : arrayLikeAt,

  size    : arrayLikeSize,
  first   : arrayLikeAtFirst,
  last    : arrayLikeLast,
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

	uniq    : arrayLikeUniq,
	filter  : arrayLikeFilter,
	reject  : arrayLikeReject,

	join    : arrayLikeJoin,

  is      : arrayLikeIs,
}

export default arrayLikeLib;
