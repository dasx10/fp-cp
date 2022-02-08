type QueryValue = (string) | (string)[];
type QueryParam <QueryPointer extends string> = string extends QueryPointer
  ? [string, (string|boolean) | (string|boolean)[]]
  : QueryPointer extends `${infer Key}=${infer Value}`
    ? [Key, QueryValue]
    : [string, QueryValue]

function querySplitParam <QueryPointer extends string>(queryPointer: QueryPointer) {
  const [key, value] = queryPointer.split('=');
  const { length } = key;
  if (key[length - 1] === ']' && value[length - 2] === '[') {
    if (value) return [key, [value]] as [string, [string]];
    return [key, [true]] as [string, [true]];
  }

  if (value) return [key, value] as [string, string];
  return [key, true] as [string, true];
}

export default querySplitParam;
