import type { ArrayLikeIsNoEmptyCore } from "./index.D";

const arrayLikeIsNotEmptyCore = (<X>(x: X) => x && (<ArrayLike<unknown>><unknown>x).length > 0) as ArrayLikeIsNoEmptyCore;
export default arrayLikeIsNotEmptyCore;
