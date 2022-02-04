function split (separator: string | RegExp, string: string): string[];
function split (separator: string | RegExp): (string: string) => string[];
function split (separator: string | RegExp, string?: string) {
  // @ts-ignore
  return arguments.length === 1 ? (string: string) => string.split(separator) : string.split(separator);
}

export default split;
