const toLowerCase = <Value extends string>(value: Value | String): Lowercase<Value> => value.toLowerCase() as Lowercase<Value>;
export default toLowerCase;