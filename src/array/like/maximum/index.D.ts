import type { ArrayLikeEachCurryDef } from "../index.D";
import type { ArrayLikeMaximumCore } from "./core/index.D";

export type ArrayLikeMaximumDef = ArrayLikeMaximumCore & ArrayLikeEachCurryDef<number, number>;
