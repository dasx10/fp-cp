import { All } from "../../is/index.D";

function array <Values extends (All)[]>(...args: Values): Values;
function array <Values extends (any)[]>(...args: Values)  : Values;
function array <Values extends (any)[]>(...args: Values)  : Values {
  return args;
}

export default array;
