import _curry2 from "../../../../function/curry/2/_/index";
import arrayLikeEveryCore         from "../core/index";
import type { ArrayLikeEveryDef } from "./index.D";

const arrayLikeEveryDef = _curry2(arrayLikeEveryCore) as ArrayLikeEveryDef;
export default arrayLikeEveryDef;
