function _atRight <Index extends number, X>(index: Index, arrayLike: ArrayLike<X>): X | undefined {
  return arrayLike[index < 0 ? arrayLike.length + index : index];
}

export default _atRight;
