// core
import array   from './_/index';

import reverse from './reverse/index';
import uniq    from './uniq/index';
import size    from './size/index';

import at      from './at/index';
import tail    from './at/tail/index';
import head    from './at/head/index';

import limit   from './limit/index';
import skip    from './skip/index';
import select  from './select/index';

import forEach from './forEach/index';
import map     from './map/index';
import filter  from './filter/index';
import find    from './find/index';

export default Object.assign(array, {
  right: <Values extends any[]>(...args: Values) => reverse(args),

  reverse,
  uniq,
  size,
  
  at,
  tail,
  head,

  limit,
  skip,
  select,

  forEach,
  map,
  filter,
  find,
});
