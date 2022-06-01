import wrap from './wrap/index';

import rest      from './rest/index';
import compose   from './compose/index';
import constanta from './const/index';
import curry     from './curry/index';
import loop      from './loop/index';
import once      from './once/index';
import partial   from './partial/index';
import pipe      from './pipe/index';

const def = Object.assign(wrap, {
  rest,
  compose,
  constanta,
  curry,
  loop,
  once,
  partial,
  pipe,
});

export default def;
