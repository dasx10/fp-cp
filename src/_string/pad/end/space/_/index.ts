function _padEndSpace <Length extends number, X extends string>(maxLenth: Length, x: X) {
  const { length } = x;
  if (length >= maxLenth) return x;
  return x + ' '.repeat(maxLenth - length);
}

export default _padEndSpace;
