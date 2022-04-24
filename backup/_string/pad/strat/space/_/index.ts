function _padEndSpace <Length extends number, X extends string>(maxLenth: Length, x: X) {
  const { length } = x;
  if (length >= maxLenth) return x;
  return ' '.repeat(maxLenth - length) + x;
}

export default _padEndSpace;
