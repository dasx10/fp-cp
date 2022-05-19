import isInteger from "../integer/index";

const numberIsIndex = (x: number) => x > -1 && isInteger(x);
export default numberIsIndex;
