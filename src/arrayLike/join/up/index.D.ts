import type { ArrayLikeValue } from "../../index.D";
export type ArrayLikeJoinUpCore = <X extends ArrayLike<any>>(array: X) => '' | `${ArrayLikeValue<X>}` | `${ArrayLikeValue<X>}${string}`; 
