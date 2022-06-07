import _curry3                     from "../../../../function/curry/3/_/index";
import arrayLikeReduceCore         from "../core/index";

// interfaces
import type { ArrayLikeReduceDef } from "./index.D";

// @ts-ignore
const arrayLikeReduceDef = _curry3(arrayLikeReduceCore) as ArrayLikeReduceDef;
export default arrayLikeReduceDef;
