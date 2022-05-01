import _curry2 from "../../function/curry/2/_/index";
import arrayLikeEveryCore  from "./core/index";
import type { EveryCurryDef } from "./index.D";

// dependencies
import arrayLikeEveryRight from "./right/index";

const arrayLikeEveryDef: EveryCurryDef = _curry2(arrayLikeEveryCore);
const arrayLikeEvery = Object.assign(arrayLikeEveryDef, {
	core  : arrayLikeEveryCore,
  right : arrayLikeEveryRight,
});

export default arrayLikeEvery;
