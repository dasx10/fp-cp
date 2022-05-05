import arrayLikeSize from '../../arrayLike/size/index';
import type { StrSize } from './index.D';

export default arrayLikeSize as <X extends string>(x: X) => StrSize<X>;
