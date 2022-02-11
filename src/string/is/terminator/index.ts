function isTerminator <X extends string>(x: X) {
  switch (x) {
    case   ' ': 
    case   '\n':
    case   '\t':
    case   '\r':
    case   '\v':
    case   '\f':
    return true;

    default: return false;
  }
}

export default isTerminator;
