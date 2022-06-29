import type { ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeExcludes } from "../../core/index.D";
export type ArrayLikeExcludesLastCore <Type extends  ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(value: ArrayLikeValue<X>, x: X) => ArrayLikeExcludes<X>;
