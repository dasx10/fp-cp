// core
import _curry2            from "../../../function/curry/2/_/index";
import arrayLikeGroupCore from "../core/index";

// interface
import type { ArrayLikeGroupDef } from "./index.D";

const arrayLikeGroupDef = _curry2(arrayLikeGroupCore) as ArrayLikeGroupDef;
export default arrayLikeGroupDef;
