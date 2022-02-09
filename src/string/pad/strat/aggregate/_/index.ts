function _padStartAggregate <
  Aggregate extends string,
  Length extends number,
  X extends string,
>(aggregate: Aggregate, maxLength: Length, x: X) {
  const { length } = x;
  if (length >= maxLength) return x;
  return aggregate.repeat(maxLength - length) + x;
}

export default _padStartAggregate;
