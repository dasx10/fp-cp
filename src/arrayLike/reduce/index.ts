import _curry3 from "../../function/curry/3/_/index";
import arrayLikeReduceCore from "./core/index";

// interfaces
import type { ReduceArrayLikeDef } from "./index.D";

// dependencies
import arrayLikeReduceRight from "./right/index";

const arrayLikeReduceDef: ReduceArrayLikeDef = _curry3(arrayLikeReduceCore);
const arrayLikeReduce = Object.assign(arrayLikeReduceDef, {
	core : arrayLikeReduceCore,
  right: arrayLikeReduceRight
});

export default arrayLikeReduce;
