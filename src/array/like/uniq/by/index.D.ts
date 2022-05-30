import type { ArrayLikeUniqByDef } from "./contract/index.D";
import type { ArrayLikeUniqByLib } from "./lib/index.D";

export type ArrayLikeUniqByMain<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeUniqByDef<Type> & ArrayLikeUniqByLib<Type>;
