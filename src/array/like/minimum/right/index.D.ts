import type { ArrayLikeEachCurryDef } from "../../index.D";
import type { ArrayLikeMinimumRightCore } from "./core/index.D";

export type ArrayLikeMinimumRightDef = ArrayLikeMinimumRightCore & ArrayLikeEachCurryDef<number, number>;
