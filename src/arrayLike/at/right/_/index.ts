import type { ToIndexRight } from '../../../index.D';
import type { AtRight } from './index.D';

function _atRight <Index extends number, X extends ArrayLike<any>>(index: ToIndexRight<Index>, arrayLike: X): AtRight<Index, X> {
  return arrayLike[arrayLike.length + index];
}

export default _atRight;
