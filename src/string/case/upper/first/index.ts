const upperFirst = <X extends string>(x: X): Capitalize<X> => {
  switch (x.length) {
    case 0:  return x as Capitalize<X>;
    case 1:  return x.toUpperCase() as Capitalize<X>;
    default: return x[0].toUpperCase() + x.substr(1) as Capitalize<X>;
  }
}

export default upperFirst;
