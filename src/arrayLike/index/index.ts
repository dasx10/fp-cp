import indexDef  from "./_/index";
import indexOf   from "./of/index";
import indexLeft from "./left/index";

const index = Object.assign(indexDef, {
  of   : indexOf,
  left : indexLeft,
});

export default index;
