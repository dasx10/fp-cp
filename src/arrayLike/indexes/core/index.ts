const arrayLikeIndexesCore = (x: ArrayLike<any>) => {
  const { length } = x;
  if (length > 0) return Array.from({ length: x.length }, (_, index) => index);
  return [];
}

export default arrayLikeIndexesCore;
