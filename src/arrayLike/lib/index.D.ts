import arrayLikeForEach from "../forEach/index";
import arrayLikeGroup   from "../group/index";
import arrayLikeIndexes from "../indexes/index";
import arrayLikeIs      from "../is/index";
import arrayLikeJoin    from "../join/index";
import arrayLikeKeys    from "../keys/index";
import arrayLikeMaximum from "../maximum/index";
import arrayLikeMinimum from "../minimum/index";
import arrayLikeReduce  from "../reduce/index";
import arrayLikeSome    from "../some/index";
import arrayLikeSum     from "../sum/index";
import arrayLikeIndex   from "../index/index";

import type { ArrayLikeAtMain }      from "../at/index.D";
import type { ArrayLikeAverageMain } from "../average/index.D";
import type { ArrayLikeCountMain }   from "../count/index.D";
import type { ArrayLikeEveryMain }   from "../every/index.D";
import type { ArrayLikeSizeCore }    from "../size/index.D";
import type { ArrayLikeAtFirstMain } from './../at/first/index.D';
import type { ArrayLikeLastMain }    from "../last/index.D";
import type { ArrayLikeFindMain }    from './../find/index.D';

export interface ArrayLikeLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly at      : ArrayLikeAtMain      <Type>,
	readonly size    : ArrayLikeSizeCore    <Type>,
  readonly first   : ArrayLikeAtFirstMain <Type>,
  readonly last    : ArrayLikeLastMain    <Type>,
	readonly keys    : typeof arrayLikeKeys,
  readonly index   : typeof arrayLikeIndex,
  readonly indexes : typeof arrayLikeIndexes,
	
  readonly find    : ArrayLikeFindMain    <Type>,
  readonly forEach : typeof arrayLikeForEach,
  readonly reduce  : typeof arrayLikeReduce,
  readonly every   : ArrayLikeEveryMain   <Type>,
  readonly some    : typeof arrayLikeSome,
	readonly group   : typeof arrayLikeGroup,
	
  readonly sum     : typeof arrayLikeSum,
  readonly count   : ArrayLikeCountMain   <Type>,
  readonly average : ArrayLikeAverageMain <Type>,
  readonly maximum : typeof arrayLikeMaximum,
  readonly minimum : typeof arrayLikeMinimum,

	readonly join    : typeof arrayLikeJoin,

  readonly is      : typeof arrayLikeIs,
}
