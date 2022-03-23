import isNoTerminator from "../../is/terminator/no/index";

const trimLeft = <X extends string>(string: X) => {
  const { length } = string;
  if (length > 0) {
    let index = 0;
    while (index < length) {
      const char = string[index];
      if (isNoTerminator(char)) break;
      index++;
    }

    if (index) return string.substr(index);
  }

  return '';
}

export default trimLeft;
