import type { ArrayValue }     from '../../../index.D';
import type { ArrayLikeValue } from '../../index.D';
import type { ArrayLimitLeft } from "../left/_/index.D";

export type ArrayLimit <Finish extends number, X extends readonly unknown[]> = number extends Finish
? ArrayValue<X>[]
: `-${Finish}` extends `${number}` 
  ? ArrayLimitLeft  <Finish, X>
  : ArrayLikeValue<X>[];
