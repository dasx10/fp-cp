import _curry2 from "../../function/curry/2/_/index";
import _min from "./_/index";
import type { ArrayLikeEachCurryDef } from "../index.D";

// dependencies
import minRight from "./right/index";

const min: ArrayLikeEachCurryDef<number, number> = _curry2(_min);

export default Object.assign(min, {
  right: minRight,
});
