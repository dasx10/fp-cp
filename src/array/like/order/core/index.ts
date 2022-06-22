import { ArrayValue } from './../../../../../backup/array/index.D';
import arrayConcatMutationCore from "../../../concat/mutation/core/index";
import type { ArrayLikeValue } from "../../index.D";
import sortType        from "../helper/sortByType";
import advancedTypeMap, { objectSchema, objectSchemaLength } from "../helper/type.schema";


const advancedType = (x: unknown) => {
	const type = typeof x;
	if (type === 'object') {
		if (x) return (<Record<string, any>>x).constructor.name;
		return 'null';
	}
	return type;
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
			let index         = 0;
			let value         = <ArrayLikeValue<X>>x[index];
			let result        = def(value);
			let type          = advancedType(result);
			const collections: Record<string, ArrayLikeValue<X>[]> = {
				[type]: [value]
			};
			while (++index < length) {
				value  = <ArrayLikeValue<X>>x[index];
				result = def(value);
				type   = advancedType(result);
				switch (type) {
					case "undefined":
					case "null":
					{
						if (collections[type]) collections[type].push(value);
						else collections[type] = [value];
						break;
					}
					default: {
						if (collections[type]) {
							if (sortType(type)(collections[type][0], value) < 0) collections[type].push(value);
							else collections[type].unshift(value);
						} else collections[type] = [value];
						break;
					}
				}
			}

			const precollection = Object.entries(collections);
			const precollectionLength = precollection.length;
			index = 0;
			type = precollection[index][0];
			let has = advancedTypeMap.has(type);
			if (has) {
				const defTypes = [[type, precollection[index][1]]];
				const advTypes = [];
				while (++index < precollectionLength) {
					type = precollection[index][0];
					if (advancedTypeMap.has(type)) {
						if (advancedTypeMap.get(defTypes[0][0]) < advancedTypeMap.get(type)) defTypes.push([type, precollection[index][1]]);
						else defTypes.unshift([type, precollection[index][1]]);
					} else advTypes.push([type, precollection[index][1]]);
				}
				const defLength = defTypes.length;
				if(defLength > 3) defTypes.sort((a, b) => advancedTypeMap.get(a[0]) - advancedTypeMap.get(b[0]));
				const advTypesLength = advTypes.length;
				switch (advTypesLength) {
					case 0: {
						switch (defLength) {
							case 1: {
								const element = defTypes[0];
								const values = element[1];
								// @ts-ignore
								if (values.length > 3) values.sort((a, b) => sortType(element[0])(def(a), def(b)));
								return values;
							}
							default: {
								let element = defTypes[0];
								// @ts-ignore
								let values       = element[1] as ArrayLikeValue<X>[];
								let lengthValues = values.length;
								// @ts-ignore
								if (lengthValues > 3) values.sort((a, b) => sortType(element[0])(def(a), def(b)));
								index = 0;
								const sorted = new Array(length);
								while (index < lengthValues) {
									sorted[index] = values[index];
									index++;
								}
								let stepCalc = lengthValues;
								let valuesIndex = 0;
								index = 0;
								while (++index < defLength) {
									element = defTypes[index];
									// @ts-ignore
									values       = element[1] as ArrayLikeValue<X>[];
									lengthValues = values.length;
									// @ts-ignore
									if (lengthValues > 3) values.sort((a, b) => sortType(element[0])(def(a), def(b)))
									valuesIndex  = 0;
									while (valuesIndex < lengthValues) {
										sorted[stepCalc + valuesIndex] = values[valuesIndex];
										valuesIndex++;
									}
									stepCalc += lengthValues;
								}
								return sorted;
							}
						}
					}
					case 1: {
						switch (defLength) {
							case 1: {
								const element = defTypes[0];
								const values  = element[1] as ArrayLikeValue<X>[];
								// @ts-ignore
								if (values.length > 3) values.sort((a, b) => sortType(element[0])(def(a), def(b)));
								let instanceName = objectSchema[0];
								const adv       = advTypes[0];
								const advValues = adv[1] as ArrayLikeValue<X>[];
								if (advValues[0] instanceof globalThis[instanceName]) {
									// @ts-ignore
									advValues.sort((a, b) => sortType(instanceName)(def(a), def(b)));
									return arrayConcatMutationCore(advValues, values);
								}
								let index = 1;
								while (index < objectSchemaLength) {
									if (advValues[0] instanceof globalThis[instanceName]) {
										// @ts-ignore
										advValues.sort((a, b) => sortType(instanceName)(def(a), def(b)));
										return arrayConcatMutationCore(advValues, values);
									};
									index++;
								}
								// @ts-ignore
								return arrayConcatMutationCore(advValues.sort((a, b) => sortType('Object')(def(a), def(b))), values);
							}
							default: {
								let element = defTypes[0];
								// @ts-ignore
								let values       = element[1] as ArrayLikeValue<X>[];
								let lengthValues = values.length;
								// @ts-ignore
								if (lengthValues > 3) values.sort((a, b) => sortType(element[0])(def(a), def(b)));
								index = 0;
								let instanceName: ArrayValue<typeof objectSchema> = objectSchema[0];
								const adv        = advTypes[0];
								const advValues  = adv[1]      as ArrayLikeValue<X>[];
								const sorted = new Array(length - advValues.length);
								while (index < lengthValues) {
									sorted[index] = values[index];
									index++;
								}
								let stepCalc = lengthValues;
								let valuesIndex = 0;
								index = 0;
								while (++index < defLength) {
									element = defTypes[index];
									// @ts-ignore
									values       = element[1] as ArrayLikeValue<X>[];
									lengthValues = values.length;
									// @ts-ignore
									if (lengthValues > 3) values.sort((a, b) => sortType(element[0])(def(a), def(b)))
									valuesIndex  = 0;
									while (valuesIndex < lengthValues) {
										sorted[stepCalc + valuesIndex] = values[valuesIndex];
										valuesIndex++;
									}
									stepCalc += lengthValues;
								}
								if (advValues[0] instanceof globalThis[instanceName]) {
									// @ts-ignore
									advValues.sort((a, b) => sortType(instanceName)(def(a), def(b)));
									return arrayConcatMutationCore(advValues, sorted);
								}
								index = 1;
								while (index < objectSchemaLength) {
									instanceName = objectSchema[index];
									// @ts-ignore
									if (advValues[0] instanceof globalThis[instanceName]) {
										// @ts-ignore
										advValues.sort((a, b) => sortType(instanceName)(def(a), def(b)));
										return arrayConcatMutationCore(advValues, sorted);
									};
									index++;
								}
								// @ts-ignore
								return arrayConcatMutationCore(advValues.sort((a, b) => sortType('Object')(def(a), def(b))), sorted);
							}
						}
					}
					default: {
						switch (defLength) {
							case 1: {
								const element = defTypes[0];
								const values  = element[1] as ArrayLikeValue<X>[];
								// @ts-ignore
								if (values.length > 3) values.sort((a, b) => sortType(element[0])(def(a), def(b)));
								let instanceName: ArrayValue<typeof objectSchema> = objectSchema[0];
								// @ts-ignore
								advTypes.sort((a, b) => a[0].localeCompare(b[0]));
								const advValues  = advTypes[0][1] as ArrayLikeValue<X>[];
								if (advValues[0] instanceof globalThis[instanceName]) {
									// @ts-ignore
									advValues.sort((a, b) => sortType(instanceName)(def(a), def(b)));
								} else {
									index = 1;
									while (index < objectSchemaLength) {
										instanceName = objectSchema[index];
										// @ts-ignore
										if (advValues[0] instanceof globalThis[instanceName]) {
											// @ts-ignore
											advValues.sort((a, b) => sortType(instanceName)(def(a), def(b)));
										};
										index++;
									}
									if (objectSchemaLength === index) advValues.sort((a, b) => sortType('Object')(def(a), def(b)));
								}

								index = 1;
								let instanceIndex;
								let nextAdvValues;
								while (index < advTypesLength) {
									instanceIndex = 0;
									nextAdvValues = advTypes[index][1];
									while (instanceIndex < objectSchemaLength) {
										instanceName = objectSchema[index];
										// @ts-ignore
										if (nextAdvValues[0] instanceof globalThis[instanceName]) {
											arrayConcatMutationCore(
												// @ts-ignore
												nextAdvValues.sort((a, b) => sortType(instanceName)(def(a), def(b))),
												advValues,
											);
											break;
										};
										instanceIndex++;
									}
									if (objectSchemaLength === instanceIndex) {
										arrayConcatMutationCore(
											// @ts-ignore
											nextAdvValues.sort((a, b) => sortType('Object')(def(a), def(b))),
											advValues,
										);
									}
									index++;
								}
								// @ts-ignore
								return arrayConcatMutationCore(advValues, values);
							}
							default: {
								let element = defTypes[0];
								// @ts-ignore
								const values       = element[1] as ArrayLikeValue<X>[];
								let lengthValues = values.length;
								// @ts-ignore
								if (lengthValues > 3) values.sort((a, b) => sortType(element[0])(def(a), def(b)));
								index = 0;
								while (++index < defLength) {
									element = defTypes[index];
									// @ts-ignore
									lengthValues = element[1];
									arrayConcatMutationCore(
										// @ts-ignore
										lengthValues > 3 ? element[1].sort((a, b) => sortType(element[0])(def(a), def(b))) : element[1],
										values
									);
								}
								let instanceName: ArrayValue<typeof objectSchema> = objectSchema[0];
								// @ts-ignore
								advTypes.sort((a, b) => a[0].localeCompare(b[0]));
								const advValues  = advTypes[0][1] as ArrayLikeValue<X>[];
								if (advValues[0] instanceof globalThis[instanceName]) {
									// @ts-ignore
									advValues.sort((a, b) => sortType(instanceName)(def(a), def(b)));
								} else {
									index = 1;
									while (index < objectSchemaLength) {
										instanceName = objectSchema[index];
										// @ts-ignore
										if (advValues[0] instanceof globalThis[instanceName]) {
											// @ts-ignore
											advValues.sort((a, b) => sortType(instanceName)(def(a), def(b)));
										};
										index++;
									}
									if (objectSchemaLength === index) advValues.sort((a, b) => sortType('Object')(def(a), def(b)));
								}

								index = 1;
								let instanceIndex;
								let nextAdvValues;
								while (index < advTypesLength) {
									instanceIndex = 0;
									nextAdvValues = advTypes[index][1];
									while (instanceIndex < objectSchemaLength) {
										instanceName = objectSchema[index];
										// @ts-ignore
										if (nextAdvValues[0] instanceof globalThis[instanceName]) {
											arrayConcatMutationCore(
												// @ts-ignore
												nextAdvValues.sort((a, b) => sortType(instanceName)(def(a), def(b))),
												advValues,
											);
											break;
										};
										instanceIndex++;
									}
									if (objectSchemaLength === instanceIndex) {
										arrayConcatMutationCore(
											// @ts-ignore
											nextAdvValues.sort((a, b) => sortType('Object')(def(a), def(b))),
											advValues,
										);
									}
									index++;
								}
								// @ts-ignore
								return arrayConcatMutationCore(advValues, values);
							}
						}
					}
				}
			} else {
				const advTypes = [[type, precollection[index][1]]];
				const defTypes = [];
				return 'next'
			}
		}
	}
}

export default arrayLikeOrderCore;
