import type { EverythingCore } from "./index.D";

const everythingCore = (<Defs extends readonly [(value: unknown) => value is unknown, (value: unknown) => value is unknown, ...((value: unknown) => value is unknown)[]]>(defs: Defs, value: unknown) => {
	const { length } = defs;
	let index = 0;
	while (index < length) {
		if (defs[index](value)) return true;
		index++;
	}
	return false;
}) as EverythingCore;

export default everythingCore;
