// core
import array     from './_/index';
import arrayTry  from './try/index';
import arrayLike from '../arrayLike/index';

import reverse   from './reverse/index';
import uniq      from './uniq/index';
import size      from './size/index';

import at        from './at/index';
import tail      from './at/tail/index';
import head      from './at/head/index';
import index     from './index/index';

import limit     from './limit/index';
import skip      from './skip/index';
import select    from './select/index';
import add       from './add/index';

import forEach   from './forEach/index';
import map       from './map/index';
import filter    from './filter/index';
import reject    from './reject/index';
import find      from './find/index';

import average   from './average/index';


export default Object.assign(array, {
  right: <Values extends any[]>(...args: Values) => reverse(args),
  try  : arrayTry,
  like : arrayLike,

  reverse,
  uniq,
  size,

  index,
  
  at,
  tail,
  head,

  limit,
  skip,
  select,
  add,

  forEach,
  map,
  filter,
  reject,
  find,

  average,
});
