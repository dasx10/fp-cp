
import filter     from './filter/index';
import map        from './map/index';

import split      from './split/index';
import chars      from './chars/index';

import numeric    from './numeric/index';

import arrayLikeSize from './size/index';
import stringCore from './core/index';

const string = Object.assign(stringCore, {
  // iterate
  filter,
  map,

  split,
  chars,

  numeric,

  size: arrayLikeSize,
  // right: true,
});

export default string;
