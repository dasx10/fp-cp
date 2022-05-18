import type { ArrayAtInvertMain } from './../invert/index.D';
import type { ArrayAtDirectMain } from './../direct/index.D';
import type { ArrayAtCore }       from '../core/index.D';
import type { ArrayTailDef }      from './../tail/index.D';
import type { ArrayHeadDef }      from '../head/index.D';
import type { ArrayAtRandomDef }  from '../random/index.D';

export interface ArrayAtLib {
	core   : ArrayAtCore;
	head   : ArrayHeadDef;
	tail   : ArrayTailDef;
	random : ArrayAtRandomDef;

	direct : ArrayAtDirectMain;
	invert : ArrayAtInvertMain;
}
