import type { ArrayLikeIsEmptyCore } from "./index.D";

const arrayLikeIsEmptyCore = (<X>(x: X) => x && (<ArrayLike<unknown>><unknown>x).length === 0) as ArrayLikeIsEmptyCore;
export default arrayLikeIsEmptyCore;
