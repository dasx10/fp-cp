declare function capitalize<Value extends string>(string: Value): Capitalize<Lowercase<Value>>;
export default capitalize;
