import type { EverythingCore, DefPredicate } from "../core/index.D";

export interface EverythingLib <Type extends DefPredicate = DefPredicate> {
	readonly core: EverythingCore<Type>;
}
