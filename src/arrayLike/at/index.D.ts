import type { AtRight } from './right/_/index.D';
import type { AtLeft }  from './left/_/index.D';

export type At <Index extends number, X extends ArrayLike<X>> = `${Index}` extends `-${number}`
  ? AtRight <Index, X>
  : AtLeft  <Index, X>
