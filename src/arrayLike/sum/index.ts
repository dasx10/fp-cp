import _curry2 from "../../function/curry/2/_/index";
import arrayLikeSumCore    from "./core/index";

// interfaces
import type { ArrayLikeEachCurryDef } from "../index.D";

// dependencies
import arrayLikeSumRight from "./right/index";
import arrayLikeSumBy    from "./by/index";

const arrayLikeSumDef: ArrayLikeEachCurryDef<number> = _curry2(arrayLikeSumCore);

const arrayLikeSum = Object.assign(arrayLikeSumDef, {
  right : arrayLikeSumRight,
  by    : arrayLikeSumBy,
});

export default arrayLikeSum;
