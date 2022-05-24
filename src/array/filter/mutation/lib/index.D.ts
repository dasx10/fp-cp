import type { ArrayFilterMutationCore } from "../core/index.D";

export interface ArrayFilterMutationLib <Type = unknown> {
	readonly core: ArrayFilterMutationCore<Type>;
}
