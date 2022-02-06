import complement from "../../../function/compliment/index";
import isFinite from "../finite/index";

const isInfinity = complement(isFinite);
export default isInfinity;
