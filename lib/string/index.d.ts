import chars from './chars/index';
import charAt from './char/at/index';
declare const string: StringConstructor & {
    chars: typeof chars;
    charAt: typeof charAt;
    toLowerCase: <Value extends string>(value: String | Value) => Lowercase<Value>;
};
export default string;
