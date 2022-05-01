import type { ArrayLikeIndexFirst } from "./index.D";

const arrayLikeIndexFirst: ArrayLikeIndexFirst = (x: ArrayLike<any>) => x.length > 0 ? 0 : -1;
export default arrayLikeIndexFirst;
