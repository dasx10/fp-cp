import apply from './apply/index';
import compose from './compose/index';
import constanta from './const/index';
import curry from './curry/index';
import { AnyFunction } from './index.D';
import loop from './loop/index';
import once from './once/index';
import partial from './partial/index';
import pipe from './pipe/index';

const libs = {
  apply,
  compose,
  constanta,
  curry,
  loop,
  once,
  partial,
  pipe,
};

const def = Object.assign(Function, libs);

export default def;
