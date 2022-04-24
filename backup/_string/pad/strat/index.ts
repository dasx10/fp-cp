import _padStartAggregate from "./aggregate/_/index";
import _padStartSpace     from "./space/_/index";

function padStart <
  Aggregate extends string,
  Length    extends number,
  X         extends string
>(aggregate: Aggregate, maxLength: Length, x: X): string;

function padStart <
  Aggregate extends string,
  Length extends number,
>(aggregate: Aggregate, maxLength: Length): <X extends string>(x: X) => string;

function padStart <
  Aggregate extends string,
>(aggregate: Aggregate): {
  <Length extends number, X extends string>(maxLength: Length, x: X): string;
  <Length extends number>(maxLength: Length):<X extends string>(x: X) => string;
}

function padStart <
  Length extends number,
  X extends string,
>(maxLength: Length, x: X): string;

function padStart <
  Length extends number,
>(maxLength: Length): <X extends string>(x: X) => string;

function padStart (z: string | number, y?: string | number, x?: string) {
  if (typeof z === 'number') {
    if (arguments.length === 1) return (y: string) => _padStartSpace(z, y);
    return _padStartSpace(z, <string>y); 
  }

  switch (arguments.length) {
    case 1: return function (y: number, x?: string) {
      if (arguments.length === 1) return (x: string) => _padStartAggregate(z, <number>y, x)
      return _padStartAggregate(z, <number>y, <string>x);
    }

    case 2: (x: string) => _padStartAggregate(z, <number>y, x);
    default: return _padStartAggregate(z, <number>y, <string>x);
  }
}

export default padStart;
