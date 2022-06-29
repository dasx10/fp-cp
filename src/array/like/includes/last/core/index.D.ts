import type { ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeIncludes } from "../../core/index.D";

export type ArrayLikeIncludesLastCore <Type extends  ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(value: ArrayLikeValue<X>, x: X) => ArrayLikeIncludes<X>;
