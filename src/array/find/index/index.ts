import _curry2 from '../../../function/curry/2/_/index';
import _findIndex from './_/index';
import type { IterateDef } from '../../index.D';

const findIndex: {
  <X>(def: IterateDef<X>, array: X[]): number;
  <X>(def: IterateDef<X>): (array: X[]) => number;
} = _curry2(_findIndex)
export default findIndex;
