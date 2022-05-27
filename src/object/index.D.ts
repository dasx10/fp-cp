export type PartialRecord<Keys extends PropertyKey = PropertyKey, Value = unknown> = {
	[Key in Keys]?: Value;
}

export type ReadonlyRecord<Keys extends PropertyKey = PropertyKey, Value = unknown> = {
	readonly [Key in Keys]: Value;
}

export type ReadonlyPartialRecord<Keys extends PropertyKey = PropertyKey, Value = unknown> = {
	readonly [Key in Keys]?: Value;
}
