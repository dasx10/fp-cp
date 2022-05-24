import type { ArrayFilterDef } from "./contract/index.D";
import type { ArrayFilterLib } from './lib/index.D';

export type ArrayFilterMain <Type = unknown> = ArrayFilterDef<Type> & ArrayFilterLib<Type>;
