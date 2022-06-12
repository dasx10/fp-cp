export type ArrayCore <Type extends unknown = unknown> = <Values extends readonly Type[]>(...args: Values) => Values;
