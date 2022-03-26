import size from '../../arrayLike/size/index';
import type { StrSize } from './index.D';

export default size as <X extends string>(x: X) => StrSize<X>;
