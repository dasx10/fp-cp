import arrayLikeIs      from "../is/index";
import arrayLikeJoin    from "../join/index";
import arrayLikeMaximum from "../maximum/index";
import arrayLikeMinimum from "../minimum/index";

import type { ArrayLikeAtMain }      from "../at/index.D";
import type { ArrayLikeAverageMain } from "../average/index.D";
import type { ArrayLikeCountMain }   from "../count/index.D";
import type { ArrayLikeEveryMain }   from "../every/index.D";
import type { ArrayLikeSizeCore }    from "../size/index.D";
import type { ArrayLikeAtFirstMain } from "../at/first/index.D";
import type { ArrayLikeLastMain }    from "../last/index.D";
import type { ArrayLikeFindMain }    from "../find/index.D";
import type { ArrayLikeForEachMain } from "../forEach/index.D";
import type { ArrayLikeKeysCore }    from "../keys/index.D";
import type { ArrayLikeIndexMain }   from "../index/index.D";
import type { ArrayLikeIndexesMain } from "../indexes/index.D";
import type { ArrayLikeReduceMain }  from "../reduce/index.D";
import type { ArrayLikeSomeMain }    from "../some/index.D";
import type { ArrayLikeGroupMain }   from "../group/index.D";
import type { ArrayLikeSumLikeMain } from "../sum/index.D";

export interface ArrayLikeLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly at      : ArrayLikeAtMain      <Type>,
	readonly size    : ArrayLikeSizeCore    <Type>,
  readonly first   : ArrayLikeAtFirstMain <Type>,
  readonly last    : ArrayLikeLastMain    <Type>,
	readonly keys    : ArrayLikeKeysCore    <Type>,
  readonly index   : ArrayLikeIndexMain   <Type>,
  readonly indexes : ArrayLikeIndexesMain <Type>,
	
  readonly find    : ArrayLikeFindMain    <Type>,
  readonly forEach : ArrayLikeForEachMain <Type>,
  readonly reduce  : ArrayLikeReduceMain  <Type>,
  readonly every   : ArrayLikeEveryMain   <Type>,
  readonly some    : ArrayLikeSomeMain    <Type>,
	readonly group   : ArrayLikeGroupMain   <Type>,
	
  readonly sum     : ArrayLikeSumLikeMain <Type>,
  readonly count   : ArrayLikeCountMain   <Type>,
  readonly average : ArrayLikeAverageMain <Type>,
  readonly maximum : typeof arrayLikeMaximum,
  readonly minimum : typeof arrayLikeMinimum,

	readonly join    : typeof arrayLikeJoin,

  readonly is      : typeof arrayLikeIs,
}
