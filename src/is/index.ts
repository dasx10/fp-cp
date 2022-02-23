// Nullable
import isDefined    from "./defined/index";
import isUndefined  from "./undefined/index";
import isNull       from "./null/index";
import isNotNothing from "./nothing/index";

import isString     from "../string/is/string/index";

import isBoolean    from "../boolean/is/boolean/index";

import isNumber     from "../number/is/number/index";
import isInteger    from "../number/is/integer/index";
import isFinite     from "../number/is/finite/index";
import isInfinity   from "../number/is/infinity/index";
import isNegative   from "../number/is/negative/index";
import isPositive   from "../number/is/positive/index";
import isZero       from "../number/is/zero/index";

// Object type
import isArray      from "../array/is/array/index";
import isFunction from "../function/is/function/index";

const is = {
  defined   : isDefined,
  undefined : isUndefined,
  null      : isNull,
  string    : isString,
  boolean   : isBoolean,

  // number
  number    : isNumber,
  integer   : isInteger,
  finite    : isFinite,
  infinity  : isInfinity,
  negative  : isNegative,
  positive  : isPositive,
  zero      : isZero,

  array     : isArray,
  function  : isFunction,

  not: {
    nothing : isNotNothing,
    defined : isUndefined,
    // null    : isNotNull,
  }
}

export default is;
