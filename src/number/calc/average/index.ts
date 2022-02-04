function average (y: number) : (x: number) => number;
function average (y: number, x: number): number;
function average (y: number, x?: number) {
  // @ts-ignore
  return arguments.length === 1 ? (y: number) => x + y / 2 : x + y / 2
}
