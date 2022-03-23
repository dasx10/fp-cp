function join (separator = ', ') {
    return function useJoin (array: string[]) {
        const { length } = array;
        switch (length) {
          case 0: return '';
          case 1: return array[0];
          default: {
            let result = array[0] + separator + array[1];
            let index = 2;
            while (index < length) {
                result += array[index] + separator;
                index++;
            }
          }
        }
        return '';
    }
}

export default join;
