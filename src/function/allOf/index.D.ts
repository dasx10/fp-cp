import type { DefPredicate } from "./core/index.D";
import type { AllOfDef }     from "./contract/index.D";
import type { AllOfLib }     from "./lib/index.D";

export type AllOfMain <Type extends DefPredicate = DefPredicate> = AllOfDef<Type> & AllOfLib<Type>;
