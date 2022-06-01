type IS_NAN <Value extends number | Number> = number extends Value
    ? boolean
    : Number extends Value
        ? boolean
        : Value extends number ? `${Value}` extends `${number}` | `-${number}` | `${number}.${number}` | `-${number}.${number}` 
            ? false
            : true : boolean;


export default isNaN as <Value extends number>(number: Value) => IS_NAN<Value>;
