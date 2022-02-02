function atRight(index: number) {
  const isLtZero = index < 0;
  return function useAtRight <Value extends any[] | string>(
    arrayOrString: Value,
  ): (Value extends (infer ArrayElement)[] ? ArrayElement : string) | void {
    return arrayOrString[isLtZero ? +index : arrayOrString.length + index];
  };
}

export default atRight;
