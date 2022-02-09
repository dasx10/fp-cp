import _curry2 from "../../../function/curry/2/_/index";

const add = _curry2(<Y extends number, X extends number>(y: Y, x: X) => x + y);
export default add;
