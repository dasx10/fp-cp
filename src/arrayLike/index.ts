// core
import at      from "./at/index";
import head    from "./at/head/index";
import tail    from "./at/tail/index";
import index   from "./index/index";

import find    from "./find/index";
import forEach from "./forEach/index";

import reduce  from "./reduce/index";

import every   from "./every/index";
import some    from "./some/index";

import count   from "./count/index";
import sum     from "./sum/index";
import average from "./average/index";
import size    from "./size/index";
import max     from "./max/index";
import min     from "./min/index";

import indexes from "./indexes/index";

import is      from "./is/index";


const arrayLike = Object.assign(<X extends any[]>(...args: X) => args,
{
  size,
  head,
  tail,
  index,
  indexes,

  at,

  find,
  forEach,

  reduce,

  every,
  some,

  count,
  sum,
  average,
  max,
  min,

  is,
});

export default arrayLike;