import arrayIsArray from "./array/index";
import arrayIsEmpty from "./empty/index";

const arrayIs = Object.assign(arrayIsArray, {
  empty: arrayIsEmpty
});

export default arrayIs;
