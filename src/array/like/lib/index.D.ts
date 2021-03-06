import type { ArrayLikeAtMain }       from "../at/index.D";
import type { ArrayLikeAverageMain }  from "../average/index.D";
import type { ArrayLikeCountMain }    from "../count/index.D";
import type { ArrayLikeEveryMain }    from "../every/index.D";
import type { ArrayLikeSizeCore }     from "../size/index.D";
import type { ArrayLikeAtFirstMain }  from "../at/first/index.D";
import type { ArrayLikeFindMain }     from "../find/index.D";
import type { ArrayLikeForEachMain }  from "../forEach/index.D";
import type { ArrayLikeKeysCore }     from "../keys/index.D";
import type { ArrayLikeIndexMain }    from "../index/index.D";
import type { ArrayLikeIndexesMain }  from "../indexes/index.D";
import type { ArrayLikeReduceMain }   from "../reduce/index.D";
import type { ArrayLikeSomeMain }     from "../some/index.D";
import type { ArrayLikeGroupMain }    from "../group/index.D";
import type { ArrayLikeSumLikeMain }  from "../sum/index.D";
import type { ArrayLikeMaximumMain }  from "../maximum/index.D";
import type { ArrayLikeMinimumMain }  from "../minimum/index.D";
import type { ArrayLikeJoinMain }     from "../join/index.D";
import type { ArrayLikeIsMain }       from "../is/index.D";
import type { ArrayLikeUniqMain }     from "../uniq/index.D";
import type { ArrayLikeFilterMain }   from "../filter/index.D";
import type { ArrayLikeRejectMain }   from "../reject/index.D";
import type { ArrayLikeMapMain }      from "../map/index.D";
import type { ArrayLikeOrderMain }    from "../order/index.D";
import type { ArrayLikeReversMain }   from "../revers/index.D";
import type { ArrayLikeConcatMain }   from "../concat/index.D";
import type { ArrayLikeSortMain }     from "../sort/index.D";
import type { ArrayLikeAtLastMain }   from "../at/last/index.D";
import type { ArrayLikeExcludesMain } from "../excludes/index.D";
import type { ArrayLikeIncludesMain } from '../includes/index.D';
import type { ArrayLikeSelectMain }   from "../select/index.D";

export interface ArrayLikeLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly at       : ArrayLikeAtMain       <Type>;
	readonly size     : ArrayLikeSizeCore     <Type>;
  readonly first    : ArrayLikeAtFirstMain  <Type>;
  readonly last     : ArrayLikeAtLastMain   <Type>;
	readonly keys     : ArrayLikeKeysCore     <Type>;
  readonly index    : ArrayLikeIndexMain    <Type>;
  readonly indexes  : ArrayLikeIndexesMain  <Type>;
	
  readonly find     : ArrayLikeFindMain     <Type>;
	readonly group    : ArrayLikeGroupMain    <Type>;
  readonly reduce   : ArrayLikeReduceMain   <Type>;
  readonly forEach  : ArrayLikeForEachMain  <Type>;
	
  readonly sum      : ArrayLikeSumLikeMain  <Type>;
  readonly count    : ArrayLikeCountMain    <Type>;
  readonly average  : ArrayLikeAverageMain  <Type>;
  readonly maximum  : ArrayLikeMaximumMain  <Type>;
  readonly minimum  : ArrayLikeMinimumMain  <Type>;

	readonly uniq     : ArrayLikeUniqMain     <Type>;
	readonly filter   : ArrayLikeFilterMain   <Type>;
	readonly reject   : ArrayLikeRejectMain   <Type>;
	readonly map      : ArrayLikeMapMain      <Type>;
	readonly sort     : ArrayLikeSortMain     <Type>;
	readonly order    : ArrayLikeOrderMain    <Type>;
	readonly revers   : ArrayLikeReversMain   <Type>;
	readonly concat   : ArrayLikeConcatMain   <Type>;
	readonly select   : ArrayLikeSelectMain   <Type>;

	readonly excludes : ArrayLikeExcludesMain <Type>;
	readonly includes : ArrayLikeIncludesMain <Type>;
	readonly some     : ArrayLikeSomeMain     <Type>;
  readonly every    : ArrayLikeEveryMain    <Type>;

	readonly join     : ArrayLikeJoinMain     <Type>;

  readonly is       : ArrayLikeIsMain;
}
