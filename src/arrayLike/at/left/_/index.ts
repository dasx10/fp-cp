function _atRight <Index extends number, X>(index: Index, array: ArrayLike<X>): X | undefined {
  return array[index < 0 ? ~index : array.length - index];
}

export default _atRight;
