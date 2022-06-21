const defaultTypeSchema = [
	"undefined",
	"null",
	"boolean",
	"number",
	"bigint",
	"string",
	"symbol",
	"function",
	"Object",
];
const defaultTypeSchemaLength = defaultTypeSchema.length;
export const objectSchema = [
	"Date",
	"Array",
	"Set",
	"Map",
	"Int8Array",
	"Int16Array",
	"Int32Array",
	"Uint8Array",
	"Uint16Array",
	"Uint32Array",
	"BigInt64Array",
	"BigUint64ArrayInt64Array",
	"Boolean",
	"Number",
	"String",
] as const;
export const objectSchemaLength = objectSchema.length;

const advancedTypeMap = new Map();
let index = 0;
while (index < defaultTypeSchemaLength) {
	advancedTypeMap.set(defaultTypeSchema[index], index);
	index++;
}

index = 0;
while (index < objectSchemaLength) {
	advancedTypeMap.set(objectSchema[index], index + defaultTypeSchemaLength);
	index++;
}

export default advancedTypeMap;
