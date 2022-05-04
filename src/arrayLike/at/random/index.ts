import type { ArrayLikeAtRandomCore } from "./index.D";

const arrayLikeAtRandom: ArrayLikeAtRandomCore = <X>(x: ArrayLike<X>) => x[~~(Math.random() * x.length)];
export default arrayLikeAtRandom;
