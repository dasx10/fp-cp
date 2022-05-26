import type { ObjectForEachCore } from "./index.D";

const objectForEachCore: ObjectForEachCore = <X extends Record<PropertyKey, unknown>>(executor: (value: X[keyof X], key: keyof X, object: X) => unknown, object: X) => {
	for (const key in object) executor(object[key], key, object);
}

export default objectForEachCore;
