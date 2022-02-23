const _clamp = <
  MIN extends number, MAX extends number, X extends number
>(minimum: MIN, maximum: MAX, x: X) => x < minimum ? minimum : x > maximum ? maximum : x;

export default _clamp;
