import _curry2 from '../../../function/curry/2/_/index';
import _averageBy from './_/index';
import type { IterateDef } from '../../index.D';

const averageBy: {
  <X>(def: IterateDef<X, number>, array: readonly X[]): number;
  <X>(def: IterateDef<X, number>): (array: readonly X[]) => number;
} = _curry2(_averageBy);

export default averageBy;
