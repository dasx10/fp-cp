function isNoTerminator <X extends string>(x: X) {
  switch (x) {
    case   ' ': 
    case   '\n':
    case   '\t':
    case   '\r':
    case   '\v':
    case   '\f':
    return false;

    default: return true;
  }
}

export default isNoTerminator;
