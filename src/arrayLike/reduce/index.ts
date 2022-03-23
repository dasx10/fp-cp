import _curry3 from "../../function/curry/3/_/index";
import _reduce from "./_/index";

// interfaces
import type { ReduceArrayLikeDef } from "./index.D";

// dependencies
import reduceRight from "./right/index";

const reduce: ReduceArrayLikeDef = _curry3(_reduce);

export default Object.assign(reduce, {
  right: reduceRight
});
