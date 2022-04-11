import indexesFilter from "./filter/index";

const indexes = (x: ArrayLike<any>) => {
  const { length } = x;
  if (length > 0) return Array.from({ length: x.length }, (_, index) => index);
  return [];
}

export default Object.assign(indexes, {
  filter: indexesFilter
});
