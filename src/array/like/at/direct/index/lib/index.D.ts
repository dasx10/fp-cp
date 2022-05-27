import type { ArrayLikeAtDirectIndexCore } from "../core/index.D";

export interface ArrayLikeAtDirectIndexLib <Type extends Record<number, unknown> = Record<number, unknown>> {
	readonly core: ArrayLikeAtDirectIndexCore <Type>;
}
