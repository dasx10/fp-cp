import type { ArrayLikeCountCore }      from "../core/index.D";
import type { ArrayLikeCountRightMain } from './../right/index.D';
import type { ArrayLikeCountOfMain }    from "../of/index.D";
import type { ArrayLikeCountIncludesMain }  from "../includes/index.D";

export interface ArrayLikeCountLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core     : ArrayLikeCountCore      <Type>;
	readonly right    : ArrayLikeCountRightMain <Type>;
	readonly includes : ArrayLikeCountIncludesMain  <Type>;
	readonly of       : ArrayLikeCountOfMain    <Type>;
}
