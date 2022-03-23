import _curry3 from "../../../function/curry/3/_/index";
import _reduceRight from "./_/index";
import type { ReduceArrayLikeDef } from "../index.D";

const reduceRight: ReduceArrayLikeDef = _curry3(_reduceRight);
export default reduceRight;
