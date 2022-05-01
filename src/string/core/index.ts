function stringCore (): '';
function stringCore <X extends string>(x: X): X;
function stringCore <X extends number | bigint | boolean>(x: X): `${X}`;
function stringCore <X extends null | undefined>(x: X): '';
function stringCore (x: unknown): string;
function stringCore (x?: unknown) {
  switch (x) {
    case void 0 :
    case null   : return '';
    default     : return String(x);
  }
}

export default stringCore;
