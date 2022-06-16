import type { AllOfCore } from "./index.D";

const allOfCore = (<Defs extends readonly [(value: unknown) => value is unknown, (value: unknown) => value is unknown, ...((value: unknown) => value is unknown)[]]>(defs: Defs, value: unknown) => {
	const { length } = defs;
	let index = 0;
	while (index < length) {
		if (defs[index](value)) return true;
		index++;
	}
	return false;
}) as AllOfCore;

export default allOfCore;
