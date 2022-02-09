function _padEndAggregate <
  Aggregate extends string,
  Length extends number,
  X extends string,
>(
  aggregate : Aggregate,
  maxLenth  : Length,
  x         : X
) {
  const { length } = x;
  if (length >= maxLenth) return x;
  return x + aggregate.repeat(maxLenth - length);
}

export default _padEndAggregate;
