function averageOf <X extends number[]>(x: X): number {
  const { length } = x;
  if (length > 0) {
    let index = 0;
    let sum = 0;
    while (index < length) {
      sum += x[index];
      index++;
    }

    return sum / length;
  }
  
  return 0;
}

export default averageOf;
