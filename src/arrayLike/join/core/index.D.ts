import { AcceptString, ToString } from "../../../string/index.D";
import { ArrayLikeValue } from "../../index.D";


export type ArrayLikeJoin <X extends ArrayLike<any>, SEPARATOR extends AcceptString = ''> = '' | `${ArrayLikeValue<X>}` | `${ArrayLikeValue<X>}${SEPARATOR}${ArrayLikeValue<X>}${string}`;
export type ArrayLikeJoinCore = <SEPARATOR extends AcceptString, X extends ArrayLike<any>>(separator: SEPARATOR, array: X) => ArrayLikeJoin<X, SEPARATOR>
