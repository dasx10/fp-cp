import type { ObjectForEachCore } from "../core/index.D";

export interface ObjectForEachLib <Type extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>> {
	readonly core: ObjectForEachCore<Type>
}
