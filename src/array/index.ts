// core
import array      from './_/index';
import arrayTry   from './try/index';
import arrayLike  from '../arrayLike/index';
import arrayRange from './range/index';
import arrayIs    from './is/index';

import arrayReverse from './reverse/index';
import arrayUniq    from './uniq/index';
import arraySize    from './size/index';
import arrayIndexes from './indexes/index';

import at        from './at/index';
import arrayLikeTail      from './at/tail/index';
import arrayLikeHead      from './at/head/index';
import index     from './index/index';

import arrayLimit from './limit/index';
import arraySkip  from './skip/index';
import add        from './add/index';

import select     from './select/index';
import concat     from './concat/index';

import forEach    from './forEach/index';
import map        from './map/index';
import filter     from './filter/index';
import reject     from './reject/index';
import find       from './find/index';

import average    from './average/index';

import sort       from './sort/index';
import join       from './join/index';
import arrayFit   from './fit/index';
import arrayCount from './count/index';

export default Object.assign(array, {
  right   : <Values extends any[]>(...args: Values) => arrayReverse(args),
  try     : arrayTry,
  like    : arrayLike,
  range   : arrayRange,
  is      : arrayIs,

  reverse : arrayReverse,
  uniq    : arrayUniq,
  size    : arraySize,
  indexes : arrayIndexes,
  index,
  
  at,
  tail: arrayLikeTail,
  head: arrayLikeHead,

  limit   : arrayLimit,
  skip    : arraySkip,
	fit     : arrayFit,

  add,

  select,
  concat,

  forEach,
  map,
  filter,
  reject,
	count  : arrayCount,
  find,

  average,

	sort,
	join
});
