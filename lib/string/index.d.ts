import chars from './chars/index';
import charAt from './char/at/index';
import numeric from './replace/pattern/numeric/index';
declare const string: StringConstructor & {
    chars: typeof chars;
    charAt: typeof charAt;
    toLowerCase: <Value extends string>(value: String | Value) => Lowercase<Value>;
    numeric: typeof numeric;
};
export default string;
