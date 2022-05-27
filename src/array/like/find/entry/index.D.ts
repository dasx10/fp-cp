import type { ArrayLikeFindEntryDef } from "./contract/index.D";
import type { ArrayLikeFindEntryLib } from "./lib/index.D";

export type ArrayLikeFindEntryMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeFindEntryDef<Type> & ArrayLikeFindEntryLib<Type>;
