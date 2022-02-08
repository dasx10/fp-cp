function concat<Arrays extends any[]>(...arrays: Arrays[]) {
  return function useConcat<
    ToArray extends any[],
    // @ts-ignore
  >(array: ToArray): Arrays extends (infer U)[] ? ToArray extends (infer X)[] ? (U | X)[] : any[] : any[]
  {
    // @ts-ignore
    return array.concat(...arrays);
  };
}

export default concat;
