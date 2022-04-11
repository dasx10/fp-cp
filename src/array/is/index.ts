import isArray from "./array/index";
import arrayIsEmpty from "./empty/index";

const is = Object.assign(isArray, {
  empty: arrayIsEmpty
});

export default is;
