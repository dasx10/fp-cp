import at from '../../arrayLike/at/index';
import type { At }   from './index.D';
import type { Head } from './head/index.D';
import type { Tail } from './tail/index.D';

export default at as {
    <Index extends number>(index: Index): <X extends string>(x: X) => At<Index, X>;
    <Index extends number, X extends string>(index: Index, array: X): At<Index, X>;
  right: {
    <Index extends number>(index: Index): <X extends string>(x: X) => string | undefined;
    <Index extends number, X extends string>(index: Index, x: X): string | undefined;
  },
  first : <X extends string>(x: X) => Head<X>,
  last  : <X extends string>(x: X) => Tail<X>
};
