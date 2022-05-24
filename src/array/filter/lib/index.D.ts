import type { ArrayFilterCore } from './../core/index.D';

export interface ArrayFilterLib <Type = unknown> {
	readonly core: ArrayFilterCore<Type>;
}
