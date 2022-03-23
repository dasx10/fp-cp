
function string (): '';
function string <X extends string>(x: X): X;
function string <X extends number | bigint | boolean>(x: X): `${X}`;
function string <X extends null | undefined>(x: X): '';
function string (x: unknown): string;
function string (x?: unknown) {
  switch (x) {
    case void 0 :
    case null   : return '';
    default     : return String(x);
  }
}

export default Object.assign(string, {
  // right: true,
});
