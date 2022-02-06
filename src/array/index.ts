/* eslint-disable import/no-cycle */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// static
import at      from './at/index';
import head    from './at/head/index';
import tail    from './at/tail/index';
import atRight from './at/right/index';

import averageBy from './average/by/index';
import averageOf from './average/of/index';

// import clone             from "./clone";
import concat  from './concat/index';
import countOf from './count/of/index';
import countBy from './count/by/index';
import map     from './map/index';

import fill      from './fill/index';
import fillFull  from './fill/full/index';
import fillStart from './fill/start/index';
import fillEnd   from './fill/end/index';

import filter    from './filter/index';

import find           from './find/index';
import findRight      from './find/right/index';
import findIndex      from './find/index/index';
import findIndexRight from './find/index/right/index';

import forEach      from './forEach/index';
import forEachRight from './forEach/right/index';

import groupBy     from './groupBy/index';
import indexOf     from './indexOf/index';
import lastIndexOf from './indexOf/last/index';
import isEmpty     from './is/empty/index';

import join        from './join/index';
import joinUp      from './join/up/index';
import joinBy      from './join/by/index';
import keyBy       from './keyBy/index';
import limit       from './limit/index';
import maximumBy   from './maximum/by/index';
import maximumOf   from './maximum/of/index';
import minimumBy   from './minimum/by/index';
import minimumOf   from './minimum/of/index';
import partition   from './partition/index';
import reduce      from './reduce/index';
import reduceRight from './reduce/right/index';

const array = Object.assign(Array, {
  at,
  head,
  tail,
  atRight,

  averageBy,
  averageOf,
  concat,
  countOf,
  countBy,
  map,

  fill,
  fillFull,
  fillStart,
  fillEnd,

  filter,

  find,
  findRight,
  findIndex,
  findIndexRight,

  forEach,
  forEachRight,
  groupBy,
  indexOf,
  lastIndexOf,
  isEmpty,
  join,
  joinUp,
  joinBy,
  keyBy,
  limit,
  maximumBy,
  maximumOf,
  minimumBy,
  minimumOf,
  partition,
  reduce,
  reduceRight,
});

export default array;
