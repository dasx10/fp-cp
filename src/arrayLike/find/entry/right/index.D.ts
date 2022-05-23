import type { ArrayLikeFindEntryRightLib } from './lib/index.D';
import type { ArrayLikeFindEntryRightDef } from './contract/index.D';

export type  ArrayLikeFindEntryRightMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeFindEntryRightDef<Type> & ArrayLikeFindEntryRightLib<Type>;
