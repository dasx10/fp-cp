import pipe from "../../../function/pipe/index";
import getLength from "../../../universals/getLength/index";
import lines from "../index";
const linesCount = pipe(lines, getLength);
export default linesCount;
