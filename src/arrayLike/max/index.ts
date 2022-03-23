// core
import _curry2 from "../../function/curry/2/_/index";
import _max    from "./_/index";

// interfaces
import type { ArrayLikeEachCurryDef } from "../index.D";

// dependencies
import maxRight from "./right/index";

const max: ArrayLikeEachCurryDef<number, number> = _curry2(_max);

export default Object.assign(max, {
  right: maxRight,
});
