import type { DefPredicate } from "./core/index.D";
import type { EverythingDef }     from "./contract/index.D";
import type { EverythingLib }     from "./lib/index.D";

export type EverythingMain <Type extends DefPredicate = DefPredicate> = EverythingDef<Type> & EverythingLib<Type>;
