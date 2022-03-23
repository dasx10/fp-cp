import _curry2 from "../../function/curry/2/_/index";
import _sum    from "./_/index";

// interfaces
import type { ArrayLikeEachCurryDef } from "../index.D";

// dependencies
import sumRight   from "./right/index";
import sumBy      from "./by/index";

const sum: ArrayLikeEachCurryDef<number> = _curry2(_sum);

export default Object.assign(sum, {
  right : sumRight,
  by    : sumBy,
});
