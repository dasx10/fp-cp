export type ObjectValue <X extends Record<PropertyKey, unknown>> = X extends Record<PropertyKey, infer Value>
	? Value & X[ObjectKey<X>]
	: X[keyof X];

export type ObjectKey <X extends Record<PropertyKey, unknown>> = X extends Record<infer Key, unknown>
	? Key & keyof X
	: keyof X;
