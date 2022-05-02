import type { ArrayLikeEachCurryDef } from "../index.D";
import type { ArrayLikeMinimumCore } from "./core/index.D";

export type ArrayLikeMinimumDef = ArrayLikeMinimumCore & ArrayLikeEachCurryDef<number, number>;
