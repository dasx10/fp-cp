import type { ArrayLikeAtLastCore } from "./index.D";

const arrayLikeAtLastCore = (<X extends ArrayLike<unknown>>(x: X) => x[x.length - 1]) as ArrayLikeAtLastCore;
export default arrayLikeAtLastCore;
