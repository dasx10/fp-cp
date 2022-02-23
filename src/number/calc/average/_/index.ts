// dependencies
import pipe from "../../../../function/pipe/index";
import _sum from "../../sum/_/index";
import half from "../../divide/half/index";

const _average = pipe(_sum, half);
export default _average;
