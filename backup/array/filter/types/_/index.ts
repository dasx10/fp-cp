
type Type = "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";

const _arrayFilterTypes = <Types extends readonly Type[], X extends readonly any[]>(types: Types, x: X) => {
	return x.filter((e) => types.includes(typeof e));
}

export default _arrayFilterTypes;
