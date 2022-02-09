import { Def3 } from "../../index.D";

function curry3 <Z, Y, X, R>(
  executor: Def3<Z, Y, X, R>,
  z: Z, y: Y, x: X,
): R;

function curry3 <Z, Y, X, R>(
  executor: Def3<Z, Y, X, R>,
  z: Z, y: Y,
): (x: X) => R;

function curry3 <Z, Y, X, R>(
  executor: Def3<Z, Y, X, R>,
  z: Z,
): {
  (y: Y, x: X): R
  (y: Y): (x: X) => R
};

function curry3 <Z, Y, X, R>(
  executor: Def3<Z, Y, X, R>
): {
  (z: Z, y: Y, x: X): R
  (z: Z, y: Y): (x: X) => R
  (z: Z): {
    (y: Y, x: X): R;
    (y: Y): (x: X) => R;
  }
};

function curry3 <Z, Y, X, R>(
    executor: Def3<Z, Y, X, R>,
    z ?: Z,
    y ?: Y,
    x ?: X
) {
    switch (arguments.length) {
        case 1: return function useCurry3 (
            z  : Z,
            y ?: Y,
            x ?: X
        ) {
          switch (arguments.length) {
            case 1 : {
              return function useCurry3boundOne (y: Y, x?: X) {
                switch (arguments.length) {
                  case 1 : return (x: X) => executor(z, y, x);
                  default: return executor(z, y, <X>x)
                }
              }
            }
            case 2 : return (x: X) => executor(z, <Y>y, x)
            default: return executor(z, <Y>y, <X>x);
          }
        };

        case 2 : {
          return function useCurry3boundTwo (y: Y, x?: X) {
            switch (arguments.length) {
              case 1  : return (x: X) => executor(<Z>z, y, x);
              default : return executor(<Z>z, y, <X>x);
            }
          };
        }
        case 3 : return (x: X) => executor(<Z>z, <Y>y, x);
        default: return executor(<Z>z, <Y>y, <X>x);
    }
}

export default curry3;
