import _curry2 from "../../../function/curry/_2/index";

const charHas = _curry2((searchValue, x) => {
  const { length } = x;
  let index = 0;
  while (index < length) {
    if (x[index] === searchValue) return true;
    index++;
  }

  return false;
});
