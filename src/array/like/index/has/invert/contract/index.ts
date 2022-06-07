import _curry2 from "../../../../../../function/curry/2/_/index";
import arrayLikeIndexHasInvertCore from "../core/index";

// interfaces
import { ArrayLikeIndexHasInvertDef } from "./index.D";

const arrayLikeIndexHasInvertDef = _curry2(arrayLikeIndexHasInvertCore) as ArrayLikeIndexHasInvertDef;
export default arrayLikeIndexHasInvertDef;
