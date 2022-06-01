// import type boolean from "../boolean/index";
// import type number  from "../number/index";
// import type string  from "../string/index";

// import type hashSet from "../hash/set/core/index";
// import type hashMap from "../hash/map/index";

// import type is    from "../is/index";
// import type logic from "../logic/index";

import type { ArrayLib } from "../array/lib/index.D";

export interface Lib {
	readonly array   : ArrayLib;
	// readonly boolean : typeof boolean;
	// readonly number  : typeof number;
	// readonly string  : typeof string;

	// readonly hashSet : typeof hashSet;
	// readonly hashMap : typeof hashMap;

	// readonly is      : typeof is;
	// readonly logic   : typeof logic;
}
