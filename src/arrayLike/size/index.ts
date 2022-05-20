import type { ArrayLikeSize, ArrayLikeSizeCore } from "./index.D";

const arrayLikeSize: ArrayLikeSizeCore = <X extends ArrayLike<unknown>>(x: X) => x.length as ArrayLikeSize<X>;
export default arrayLikeSize;
