const sortType = (type: string) => {
	switch (type) {
		case "string": 
		case "String": 
			return (a: any, b: any) => a.localeCompare(b);
		case "number":
		case "Number":
		case "bigint":
		case "boolean":
		case "Boolean":
		case "Date":
			return (a: any, b: any) => a - b;
		case "symbol":
			return (a: any, b: any) => a === b ? 1 : 0;
		case "Array":
		case "Int8Array":
		case "Int16Array":
		case "Int32Array":
		case "Uint8Array":
		case "Uint16Array":
		case "Uint32Array":
		case "BigInt64Array":
		case "BigUint64ArrayInt64Array":
		case "Function":
		case "function":
			return (a: any, b: any) => a.length - b.length;
		case "Set":
		case "Map":
			return (a: any, b: any) => a.size - b.size;
		case "Object":
			return (a: any, b: any) => Object.keys(a).length - Object.keys(b).length
		default:
			return (a: any, b: any) => a < b ? -1 : a === b ? 0 : 1;
	}
};

export default sortType;
