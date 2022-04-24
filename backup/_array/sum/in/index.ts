// /**
//  * 
//  * @param {Array<number>} numberArray 
//  * @returns {number}
//  */
const sumIn = (arrayNumbers: number[]) => {
  const { length } = arrayNumbers;
  if (length) {
    let sum = 0;
    let index = 0;
    while (index < length) {
      sum += arrayNumbers[index];
      index++;
    }
    return sum;
  }

  return 0;
} 

export default sumIn;
