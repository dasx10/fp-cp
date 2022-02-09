import _padEndAggregate from "./aggregate/_/index";
import _padEndSpace     from "./space/_/index";

function padEnd <
  Aggregate extends string,
  Length    extends number,
  X         extends string
>(aggregate: Aggregate, maxLength: Length, x: X): string;

function padEnd <
  Aggregate extends string,
  Length extends number,
>(aggregate: Aggregate, maxLength: Length): <X extends string>(x: X) => string;

function padEnd <
  Aggregate extends string,
>(aggregate: Aggregate): {
  <Length extends number, X extends string>(maxLength: Length, x: X): string;
  <Length extends number>(maxLength: Length):<X extends string>(x: X) => string;
}

function padEnd <
  Length extends number,
  X extends string,
>(maxLength: Length, x: X): string;

function padEnd <
  Length extends number,
>(maxLength: Length): <X extends string>(x: X) => string;

function padEnd (z: string | number, y?: string | number, x?: string) {
  if (typeof z === 'number') {
    if (arguments.length === 1) return (y: string) => _padEndSpace(z, y);
    return _padEndSpace(z, <string>y); 
  }

  switch (arguments.length) {
    case 1: return function (y: number, x?: string) {
      if (arguments.length === 1) return (x: string) => _padEndAggregate(z, <number>y, x)
      return _padEndAggregate(z, <number>y, <string>x);
    }

    case 2: (x: string) => _padEndAggregate(z, <number>y, x);
    default: return _padEndAggregate(z, <number>y, <string>x);
  }
}

export default padEnd;
