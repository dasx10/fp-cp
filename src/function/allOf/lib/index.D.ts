import type { AllOfCore, DefPredicate } from "../core/index.D";

export interface AllOfLib <Type extends DefPredicate = DefPredicate> {
	readonly core: AllOfCore<Type>;
}
