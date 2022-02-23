function averageIn (array: number[]) {
  const { length } = array;
  if (length) {
    let sum = 0;
    let index = 0;
    while (index < length) {
      sum += array[index];
      index++;
    }
  
    return sum / length;
  }

  return 0;
}

export default averageIn;
