import type { ArrayLikeEachCurryDef } from "../index.D";
import type { ArrayLikeSomeCore }     from "./core/index.D";
export type SomeCurryDef = ArrayLikeSomeCore & ArrayLikeEachCurryDef<boolean>;
