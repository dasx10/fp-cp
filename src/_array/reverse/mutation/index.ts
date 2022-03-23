/**
 * Use with extreme caution. This function will mutate your incoming array
 * If not necessary, use a mutation. Use the `reverse` function
 * @param {ArrayElement[]} array `Array<ArrayElement>`
 * @returns {ArrayElement[]} `ReverseArray<ArrayElement>`
 * @template ArrayElement
 */
function reverseMutation <T extends any[]>(array: T) {
  let index = 0;
  const { length } = array;
  let invert = length;
  while (index < length) {
    array[index] = array[--invert];
    index++;
  }

  return array as T extends (infer E)[] ? E[] : T;
}

export default reverseMutation;
