import indexesFilter from "./filter/index";

const indexes = (x: ArrayLike<any>) => Array.from({ length: x.length }, (_, index) => index);
export default Object.assign(indexes, {
  filter: indexesFilter
});
