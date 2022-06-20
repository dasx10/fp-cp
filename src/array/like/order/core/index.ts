import type { ArrayLikeValue } from "../../index.D";

const unmultiplyTypeSwitch = {
	string   : (a: string,    b: string)    => a.localeCompare(b),
	number   : (a: number,    b: number)    => a - b,
	bigint   : (a: bigint,    b: bigint)    => a - b,
	boolean  : (a: boolean,   b: boolean)   => +a - +b,
	date     : (a: Date,      b: Date)      => +a - +b,
	array    : (a: unknown[], b: unknown[]) => a.length - b.length,
	function : (a: Function,  b: Function)  => a.length - b.length,
	symbol   : (a: symbol,    b: symbol)    => a === b ? 1 : 0,
	object   : (a: object,    b: object)    => {
		if (a) {
			if (b) return Object.keys(a).length - Object.keys(a).length;
			return 1;
		}
		if (b) return -1;
		return 0;
	},
};

const typeSchema = {
	undefined: 10,
	null     : 9,
	boolean  : 8,
	number   : 7,
	bigint   : 6,
	string   : 5,
	symbol   : 4,
	date     : 3,
	object   : 2,
	map      : 1,
	set      : 0,
	array    : -1,
	function : -2,
}

type keySchema = keyof typeof typeSchema;

const swapByType = (a: keySchema, b: keySchema) => {
	return typeSchema[a] - typeSchema[b];
}

const advancedType = (x: unknown) => {
	const type = typeof x;
	if (type === 'object') {
		if (Array.isArray(x))  return 'array';
		if (x instanceof Date) return 'date';
	}
	return type;
}

const checkTypeObjectEver = (element: unknown) => {
	if (element instanceof Date)    return 'date';
	if (Array.isArray(element))     return 'array';
	if (element instanceof Set)     return 'set';
	if (element instanceof Map)     return 'map';
	if (element instanceof String)  return 'string';
	if (element instanceof Number)  return 'number';
	if (element instanceof Boolean) return 'boolean';
}

const checkTypeObject = (element: unknown) => {
	if (element) return checkTypeObjectEver(element) || 'object';
	return 'null';
}

const arrayLikeOrderCore = <X extends ArrayLike<unknown>>(def: (value: ArrayLikeValue<X>) => unknown, x: X) => {
	const { length } = x;
	switch (length) {
		case 0  : return [];
		case 1  : return [x[0]];
		case 2  : {
			const firstStep = def(<ArrayLikeValue<X>>x[0]);
			if (firstStep) {
				const nextStep  = def(<ArrayLikeValue<X>>x[1]);
				if (nextStep) {
					const type = advancedType(firstStep);
					if (type === advancedType(nextStep)) {
						// @ts-ignore
						return unmultiplyTypeSwitch[type](firstStep, nextStep) < 0 ? [x[1], x[0]] : [x[0], x[1]];
					}
				}
			}
			if (def(<ArrayLikeValue<X>>x[1])) return [x[1], x[0]];
			return [x[0], x[1]];
		}
		default : {
			const sorted                = new Array(length);
			let index                   = 0;
			let nextIndex               = index + 1;
			let firstStep               = def(<ArrayLikeValue<X>>x[index]);
			let nextStep                = def(<ArrayLikeValue<X>>x[nextIndex]);
			let firstStepType           = typeof(firstStep);
			let nextStepType: keySchema = typeof(nextStep);
			let isAcceptedType = firstStepType === nextStepType;
			if (isAcceptedType) {
				if (nextStepType === 'object') {


				} else {
					// @ts-ignore 
					if (unmultiplyTypeSwitch[firstStepType](firstStep, nextStep) < 0) {
						sorted[index]     = x[index];
						sorted[nextIndex] = x[nextIndex];
					} else {
						sorted[index]     = x[nextIndex];
						sorted[nextIndex] = x[index];
					}

					while ((index += 2, nextIndex += 2) < length) { 
						if (isAcceptedType = firstStepType === (nextStepType = typeof(nextStep = def(<ArrayLikeValue<X>>x[nextIndex])))) {
							// @ts-ignore 
							if (nextStepType === 'object') {
								
							} else {
								// @ts-ignore 
								if (unmultiplyTypeSwitch[firstStepType](firstStep, nextStep) < 0) {
									sorted[index]     = x[index];
									sorted[nextIndex] = x[nextIndex];
								} else {
									sorted[index]     = x[nextIndex];
									sorted[nextIndex] = x[index];
								}
							}
						}
					}
					if (index < length) sorted[index] = x[index]
				}
			} else {
				
			}
			
			// @ts-ignore
			return sorted.sort(isAcceptedType ? unmultiplyTypeSwitch[firstStepType] : () => -1);
		}
	}
}

export default arrayLikeOrderCore;
