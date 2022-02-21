function averageIn (array: number[]) {
  const { length } = array;
  if (length) {
    let result = 0;
    let index = 0;
    while (index < length) {
      result += array[index];
      index++;
    }
  
    return result / length;
  }

  return 0;
}

export default averageIn;
