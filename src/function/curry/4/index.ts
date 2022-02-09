import { Def4 } from "../../index.D";

function curry4 <M, Z, Y, X, R>(executor: Def4<M, Z, Y, X, R>, m: M, z: Z, y: Y, x: X): R;
function curry4 <M, Z, Y, X, R>(executor: Def4<M, Z, Y, X, R>, m: M, z: Z, y: Y): (x: X) => R;
function curry4 <M, Z, Y, X, R>(executor: Def4<M, Z, Y, X, R>, m: M, z: Z): {
  (y: Y, x: X): R;
  (y: Y): (x: X) => R;
}

function curry4 <M, Z, Y, X, R>(executor: Def4<M, Z, Y, X, R>, m: M): {
  (z: Z, y: Y, x: X): R;
  (z: Z, y: Y): (x: X) => R;
  (z: Z): {
    (y: Y, x: X): R
    (y: Y): (x: X) => R
  };
}

function curry4 <M, Z, Y, X, R>(executor: Def4<M, Z, Y, X, R>): {
  (m: M, z: Z, y: Y, x: X): R;
  (m: M, z: Z, y: Y): (x: X) => R;
  (m: M, z: Z): {
    (y: Y, x: X): R
    (y: Y): (x: X) => R
  };
  (m: M): {
    (z: Z, y: Y, x: X): R;
    (z: Z, y: Y): (x: X) => R;
    (z: Z): {
      (y: Y, x: X): R
      (y: Y): (x: X) => R
    };
  };
}

function curry4 <M, Z, Y, X, R>(executor: Def4<M, Z, Y, X, R>, m?: M, z?: Z, y?: Y, x?: X) {
  switch (arguments.length) {
    case 1: return function (m: M, z?: Z, y?: Y, x?: X) {
      switch (arguments.length) {
        case 1 : return function (z: Z, y?: Y, x?: X) {
          switch (arguments.length) {
            case 1: return function (y: Y, x?: X) {
              if (arguments.length === 1) return (x: X) => executor(m, z, y, x);
              return executor(m, z, y, <X>x);
            }

            case 2: return (x: X) => executor(m, z, <Y>y, x);
            default: return executor(m, z, <Y>y, <X>x);
          }
        }

        case 2: return function (y: Y, x?: X) {
          if (arguments.length === 1) return (x: X) => executor(m, <Z>z, y, x);
          return executor(m, <Z>z, y, <X>x);
        }

        case 3: return (x: X) => executor(m, <Z>z, <Y>y, x);
        default : return executor(m, <Z>z, <Y>y, <X>x);
      }
    }

    case 2: return function (z: Z, y?: Y, x?: X) {
      switch (arguments.length) {
        case 1: return function (y: Y, x?: X) {
          if (arguments.length === 1) return (x: X) => executor(<M>m, z, y, x);
          return executor(<M>m, z, y, <X>x);
        }

        case 2: (x: X) => executor(<M>m, z, <Y>y, x);
        default: executor(<M>m, z, <Y>y, <X>x);
      }
    }

    case 3: return function (y: Y, x?: X) {
      if (arguments.length === 1) return (x: X) => executor(<M>m, <Z>z, y, x);
      return executor(<M>m, <Z>z, y, <X>x);
    }

    case 4: return (x: X) => executor(<M>m, <Z>z, <Y>y, x);
    default: return executor(<M>m, <Z>z, <Y>y, <X>x);
  }
}

export default curry4;
