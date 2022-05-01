const arrayLikeMaximumOf = <X extends ArrayLike<number>>(x: X) => {
  const { length } = x;
  if (length > 0) {
    let flag = x[0];
    let index = 1;
    while (index < length) {
      const value = x[index];
      if (value > flag) flag = value;
      index++;
    }
    return flag;
  }

  return -Infinity;
}

export default arrayLikeMaximumOf;
