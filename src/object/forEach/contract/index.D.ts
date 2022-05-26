import type { ObjectKey, ObjectValue } from "../../map/keys/index.D";
import type { ObjectForEachCore }      from "../core/index.D";

export type ObjectForEachDef <Type extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>> = ObjectForEachCore<Type> & {
	<
		WaitType extends Type                  = Type,
		Value    extends ObjectValue<WaitType> = ObjectValue<WaitType>,
		Key      extends ObjectKey<WaitType>   = ObjectKey<WaitType>,
	>(executor: (
		value  : Value    & ObjectValue<WaitType>,
		key    : Key      & ObjectKey<WaitType>,
		object : WaitType & Record<Key, Value>
	) => unknown): <X extends WaitType>(object: X) => void;
}
