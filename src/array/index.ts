// core
import limit   from './limit/index';
import skip    from './skip/index';
import reverse from './reverse/index';
import map     from './map/index'

// dependencies
import at      from '../arrayLike/at/index';
import tail    from '../arrayLike/at/tail/index';
import head    from '../arrayLike/at/head/index';
import forEach from '../arrayLike/forEach/index';

// interfaces
import type { ArrayAtDef } from './at/index.D';
import type { TailDef }    from './at/tail/index.D';
import type { HeadDef }    from './at/head/index.D';
import type { ForEachDef } from './forEach/index.D';

const array = Object.assign(<Values extends any[]>(...args: Values) => args, {
  right: <Values extends any[]>(...args: Values) => reverse(args),

  reverse,
  limit,
  skip,
  map,
  
  forEach : forEach as unknown as ForEachDef,
  at      : at      as ArrayAtDef,
  tail    : tail    as TailDef,
  head    : head    as HeadDef,
});

export default array;
