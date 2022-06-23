import arrayConcatMutationCore from "../../../concat/mutation/core/index";
import sortType                from "../helper/sortByType";
import advancedTypeMap, { objectSchema, objectSchemaLength } from "../helper/type.schema";

import type { ArrayValue }         from './../../../../../backup/array/index.D';
import type { ArrayLikeValue }     from "../../index.D";
import type { ArrayLikeOrderCore } from './index.D';


const advancedType = (x: unknown) => {
	const type = typeof x;
	if (type === 'object') {
		if (x) return (<Record<string, any>>x).constructor.name;
		return 'null';
	}
	return type;
}

const arrayLikeOrderCore = (<X extends ArrayLike<unknown>>(x: X) => {
	const { length } = x;
	switch (length) {
		case 0  : return [];
		case 1  : return [x[0]];
		case 2  : {
			const first          = x[0];
			let type: string     = typeof(first);
			const next           = x[1];
			let nextType: string = typeof(next);
			if (nextType === type) {
				if (nextType === 'object') {
					nextType = next  ? (<Record<string, any>>next).constructor.name  : 'null';
					type     = first ? (<Record<string, any>>first).constructor.name : 'null';
					if (type === nextType) {
						if (type === 'null') return [first, next];
						let index = 0;
						while (index < objectSchemaLength) {
							const instanceName: ArrayValue<typeof objectSchema> = objectSchema[index];
							// @ts-ignore
							if (first instanceof globalThis[instanceName]) {
								// @ts-ignore
								return sortType(instanceName)(first, next) < 0 ? [first, next] : [next, first];
							};
							index++;
						}
						return sortType('Object')(first, next) < 0 ? [first, next] : [next, first];
					}
					switch ('null') {
						case type     : return [first, next];
						case nextType : return [next, first];
						default       : {
							const firstResult = advancedTypeMap.get(type);
							if (firstResult > 0) {
								const nextResult = advancedTypeMap.get(nextType);
								if (nextResult > 0) return firstResult - nextResult ? [first, next] : [next, first];
								return [first, next]
							}
							const nextResult = advancedTypeMap.get(nextType);
							if (nextResult > 0) return [next, first];
							return type.localeCompare(nextType) < 0 ? [first, next] : [next, first]
						}
					}
				}

				return sortType('Object')(first, next) < 0 ? [first, next] : [next, first]; 
			}

			const firstResult = advancedTypeMap.get(type);
			if (firstResult > 0) {
				const nextResult = advancedTypeMap.get(nextType);
				if (nextResult > 0) return firstResult - nextResult ? [first, next] : [next, first];
				return [first, next]
			}
			const nextResult = advancedTypeMap.get(nextType);
			if (nextResult > 0) return [next, first];
			return type.localeCompare(nextType) < 0 ? [first, next] : [next, first]
		}
		default : {
			let index         = 0;
			let value         = <ArrayLikeValue<X>>x[index];
			let type          = advancedType(value);
			const collections: Record<string, ArrayLikeValue<X>[]> = {
				[type]: [value]
			};
			while (++index < length) {
				value  = <ArrayLikeValue<X>>x[index];
				type   = advancedType(value);
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

			const preCollection = Object.entries(collections);
			const preCollectionLength = preCollection.length;
			index = 0;
			type = preCollection[index][0];
			let has = advancedTypeMap.has(type);
			if (has) {
				const defTypes = [[type, preCollection[index][1]]];
				const advTypes = [];
				while (++index < preCollectionLength) {
					type = preCollection[index][0];
					if (advancedTypeMap.has(type)) {
						if (advancedTypeMap.get(defTypes[0][0]) < advancedTypeMap.get(type)) defTypes.push([type, preCollection[index][1]]);
						else defTypes.unshift([type, preCollection[index][1]]);
					} else advTypes.push([type, preCollection[index][1]]);
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
								if (values.length > 3) values.sort((a, b) => sortType(element[0])(a, b));
								return values;
							}
							default: {
								let element = defTypes[0];
								// @ts-ignore
								let values       = element[1] as ArrayLikeValue<X>[];
								let lengthValues = values.length;
								// @ts-ignore
								values.sort((a, b) => sortType(element[0])(a, b));
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
									values.sort((a, b) => sortType(element[0])(a, b))
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
								if (values.length > 3) values.sort((a, b) => sortType(element[0])(a, b));
								let instanceName = objectSchema[0];
								const adv       = advTypes[0];
								const advValues = adv[1] as ArrayLikeValue<X>[];
								if (advValues[0] instanceof globalThis[instanceName]) {
									// @ts-ignore
									advValues.sort((a, b) => sortType(instanceName)(a, b));
									return arrayConcatMutationCore(advValues, values);
								}
								let index = 1;
								while (index < objectSchemaLength) {
									if (advValues[0] instanceof globalThis[instanceName]) {
										// @ts-ignore
										advValues.sort((a, b) => sortType(instanceName)(a, b));
										return arrayConcatMutationCore(advValues, values);
									};
									index++;
								}
								// @ts-ignore
								return arrayConcatMutationCore(advValues.sort((a, b) => sortType('Object')(a, b)), values);
							}
							default: {
								let element = defTypes[0];
								// @ts-ignore
								let values       = element[1] as ArrayLikeValue<X>[];
								let lengthValues = values.length;
								// @ts-ignore
								values.sort((a, b) => sortType(element[0])(a, b));
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
									values.sort((a, b) => sortType(element[0])(a, b))
									valuesIndex  = 0;
									while (valuesIndex < lengthValues) {
										sorted[stepCalc + valuesIndex] = values[valuesIndex];
										valuesIndex++;
									}
									stepCalc += lengthValues;
								}
								if (advValues[0] instanceof globalThis[instanceName]) {
									// @ts-ignore
									advValues.sort((a, b) => sortType(instanceName)(a, b));
									return arrayConcatMutationCore(advValues, sorted);
								}
								index = 1;
								while (index < objectSchemaLength) {
									instanceName = objectSchema[index];
									// @ts-ignore
									if (advValues[0] instanceof globalThis[instanceName]) {
										// @ts-ignore
										advValues.sort((a, b) => sortType(instanceName)(a, b));
										return arrayConcatMutationCore(advValues, sorted);
									};
									index++;
								}
								// @ts-ignore
								return arrayConcatMutationCore(advValues.sort((a, b) => sortType('Object')(a, b)), sorted);
							}
						}
					}
					default: {
						switch (defLength) {
							case 1: {
								const element = defTypes[0];
								const values  = element[1] as ArrayLikeValue<X>[];
								// @ts-ignore
								if (values.length > 3) values.sort((a, b) => sortType(element[0])(a, b));
								let instanceName: ArrayValue<typeof objectSchema> = objectSchema[0];
								// @ts-ignore
								advTypes.sort((a, b) => a[0].localeCompare(b[0]));
								const advValues  = advTypes[0][1] as ArrayLikeValue<X>[];
								if (advValues[0] instanceof globalThis[instanceName]) {
									// @ts-ignore
									advValues.sort((a, b) => sortType(instanceName)(a, b));
								} else {
									index = 1;
									while (index < objectSchemaLength) {
										instanceName = objectSchema[index];
										// @ts-ignore
										if (advValues[0] instanceof globalThis[instanceName]) {
											// @ts-ignore
											advValues.sort((a, b) => sortType(instanceName)(a, b));
										};
										index++;
									}
									if (objectSchemaLength === index) advValues.sort((a, b) => sortType('Object')(a, b));
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
												nextAdvValues.sort((a, b) => sortType(instanceName)(a, b)),
												advValues,
											);
											break;
										};
										instanceIndex++;
									}
									if (objectSchemaLength === instanceIndex) {
										arrayConcatMutationCore(
											// @ts-ignore
											nextAdvValues.sort((a, b) => sortType('Object')(a, b)),
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
								values.sort((a, b) => sortType(element[0])(a, b));
								index = 0;
								while (++index < defLength) {
									element = defTypes[index];
									// @ts-ignore
									lengthValues = element[1];
									arrayConcatMutationCore(
										// @ts-ignore
										element[1].sort((a, b) => sortType(element[0])(a, b)),
										values
									);
								}
								let instanceName: ArrayValue<typeof objectSchema> = objectSchema[0];
								// @ts-ignore
								advTypes.sort((a, b) => a[0].localeCompare(b[0]));
								const advValues  = advTypes[0][1] as ArrayLikeValue<X>[];
								if (advValues[0] instanceof globalThis[instanceName]) {
									// @ts-ignore
									advValues.sort((a, b) => sortType(instanceName)(a, b));
								} else {
									index = 1;
									while (index < objectSchemaLength) {
										instanceName = objectSchema[index];
										// @ts-ignore
										if (advValues[0] instanceof globalThis[instanceName]) {
											// @ts-ignore
											advValues.sort((a, b) => sortType(instanceName)(a, b));
										};
										index++;
									}
									if (objectSchemaLength === index) advValues.sort((a, b) => sortType('Object')(a, b));
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
												nextAdvValues.sort((a, b) => sortType(instanceName)(a, b)),
												advValues,
											);
											break;
										};
										instanceIndex++;
									}
									if (objectSchemaLength === instanceIndex) {
										arrayConcatMutationCore(
											// @ts-ignore
											nextAdvValues.sort((a, b) => sortType('Object')(a, b)),
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
				const advTypes = [[type, preCollection[index][1]]];
				const defTypes = [];
				while (++index < preCollectionLength) {
					type = preCollection[index][0];
					if (advancedTypeMap.has(type)) {
						defTypes.push([type, preCollection[index][1]]);
						break;
					} else advTypes.push([type, preCollection[index][1]]);
				}
				while (++index < preCollectionLength) {
					type = preCollection[index][0];
					if (advancedTypeMap.has(type)) {
						if (advancedTypeMap.get(defTypes[0][0]) < advancedTypeMap.get(type)) defTypes.push([type, preCollection[index][1]]);
						else defTypes.unshift([type, preCollection[index][1]]);
					} else advTypes.push([type, preCollection[index][1]]);
				}
				
				const defTypesLength = defTypes.length;
				const advTypesLength = advTypes.length;
				switch (defTypesLength) {
					case 0: {
						switch (advTypesLength) {
							case 1: {
								let instanceName = objectSchema[0];
								const adv        = advTypes[0];
								const advValues  = adv[1] as ArrayLikeValue<X>[];
								if (advValues[0] instanceof globalThis[instanceName]) {
									// @ts-ignore
									return advValues.sort((a, b) => sortType(instanceName)(a, b));
								}
								index = 1;
								while (index < objectSchemaLength) {
									if (advValues[0] instanceof globalThis[instanceName]) {
										// @ts-ignore
										return advValues.sort((a, b) => sortType(instanceName)(a, b));
									};
									index++;
								}
								// @ts-ignore
								return advValues.sort((a, b) => sortType('Object')(a, b));
							}
							default: {
								let instanceName: ArrayValue<typeof objectSchema> = objectSchema[0];
								// @ts-ignore
								advTypes.sort((a, b) => a[0].localeCompare(b[0]));
								const advValues  = advTypes[0][1] as ArrayLikeValue<X>[];
								if (advValues[0] instanceof globalThis[instanceName]) {
									// @ts-ignore
									advValues.sort((a, b) => sortType(instanceName)(a, b));
								} else {
									index = 1;
									while (index < objectSchemaLength) {
										instanceName = objectSchema[index];
										// @ts-ignore
										if (advValues[0] instanceof globalThis[instanceName]) {
											// @ts-ignore
											advValues.sort((a, b) => sortType(instanceName)(a, b));
										};
										index++;
									}
									if (objectSchemaLength === index) advValues.sort((a, b) => sortType('Object')(a, b));
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
												nextAdvValues.sort((a, b) => sortType(instanceName)(a, b)),
												advValues,
											);
											break;
										};
										instanceIndex++;
									}
									if (objectSchemaLength === instanceIndex) {
										arrayConcatMutationCore(
											// @ts-ignore
											nextAdvValues.sort((a, b) => sortType('Object')(a, b)),
											advValues,
										);
									}
									index++;
								}
								
								return advValues;
							}
						}
					}
					case 1: {
						switch (advTypesLength) {
							case 1: {
								const element = defTypes[0];
								const values  = element[1] as ArrayLikeValue<X>[];
								// @ts-ignore
								if (values.length > 3) values.sort((a, b) => sortType(element[0])(a, b));
								let instanceName = objectSchema[0];
								const adv       = advTypes[0];
								const advValues = adv[1] as ArrayLikeValue<X>[];
								if (advValues[0] instanceof globalThis[instanceName]) {
									// @ts-ignore
									advValues.sort((a, b) => sortType(instanceName)(a, b));
									return arrayConcatMutationCore(advValues, values);
								}
								let index = 1;
								while (index < objectSchemaLength) {
									if (advValues[0] instanceof globalThis[instanceName]) {
										// @ts-ignore
										advValues.sort((a, b) => sortType(instanceName)(a, b));
										return arrayConcatMutationCore(advValues, values);
									};
									index++;
								}
								// @ts-ignore
								return arrayConcatMutationCore(advValues.sort((a, b) => sortType('Object')(a, b)), values);
							}
							default: {
								const element = defTypes[0];
								const values  = element[1] as ArrayLikeValue<X>[];
								// @ts-ignore
								if (values.length > 3) values.sort((a, b) => sortType(element[0])(a, b));
								let instanceName: ArrayValue<typeof objectSchema> = objectSchema[0];
								// @ts-ignore
								advTypes.sort((a, b) => a[0].localeCompare(b[0]));
								const advValues  = advTypes[0][1] as ArrayLikeValue<X>[];
								if (advValues[0] instanceof globalThis[instanceName]) {
									// @ts-ignore
									advValues.sort((a, b) => sortType(instanceName)(a, b));
								} else {
									index = 1;
									while (index < objectSchemaLength) {
										instanceName = objectSchema[index];
										// @ts-ignore
										if (advValues[0] instanceof globalThis[instanceName]) {
											// @ts-ignore
											advValues.sort((a, b) => sortType(instanceName)(a, b));
										};
										index++;
									}
									if (objectSchemaLength === index) advValues.sort((a, b) => sortType('Object')(a, b));
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
												nextAdvValues.sort((a, b) => sortType(instanceName)(a, b)),
												advValues,
											);
											break;
										};
										instanceIndex++;
									}
									if (objectSchemaLength === instanceIndex) {
										arrayConcatMutationCore(
											// @ts-ignore
											nextAdvValues.sort((a, b) => sortType('Object')(a, b)),
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
					default: {
						switch (advTypesLength) {
							case 1: {
								let element = defTypes[0];
								// @ts-ignore
								let values       = element[1] as ArrayLikeValue<X>[];
								let lengthValues = values.length;
								// @ts-ignore
								values.sort((a, b) => sortType(element[0])(a, b));
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
								while (++index < defTypesLength) {
									element = defTypes[index];
									// @ts-ignore
									values       = element[1] as ArrayLikeValue<X>[];
									lengthValues = values.length;
									// @ts-ignore
									values.sort((a, b) => sortType(element[0])(a, b))
									valuesIndex  = 0;
									while (valuesIndex < lengthValues) {
										sorted[stepCalc + valuesIndex] = values[valuesIndex];
										valuesIndex++;
									}
									stepCalc += lengthValues;
								}
								if (advValues[0] instanceof globalThis[instanceName]) {
									// @ts-ignore
									advValues.sort((a, b) => sortType(instanceName)(a, b));
									return arrayConcatMutationCore(advValues, sorted);
								}
								index = 1;
								while (index < objectSchemaLength) {
									instanceName = objectSchema[index];
									// @ts-ignore
									if (advValues[0] instanceof globalThis[instanceName]) {
										// @ts-ignore
										advValues.sort((a, b) => sortType(instanceName)(a, b));
										return arrayConcatMutationCore(advValues, sorted);
									};
									index++;
								}
								// @ts-ignore
								return arrayConcatMutationCore(advValues.sort((a, b) => sortType('Object')(a, b)), sorted);
							}
							default: {
								let element = defTypes[0];
								const values     = element[1] as ArrayLikeValue<X>[];
								// @ts-ignore
								values.sort((a, b) => sortType(element[0])(a, b));
								index = 0;
								while (++index < defTypesLength) {
									element = defTypes[index];
									arrayConcatMutationCore(
										// @ts-ignore
										element[1].sort((a, b) => sortType(element[0])(a, b)),
										values
									);
								}
								let instanceName: ArrayValue<typeof objectSchema> = objectSchema[0];
								// @ts-ignore
								advTypes.sort((a, b) => a[0].localeCompare(b[0]));
								const advValues  = advTypes[0][1] as ArrayLikeValue<X>[];
								if (advValues[0] instanceof globalThis[instanceName]) {
									// @ts-ignore
									advValues.sort((a, b) => sortType(instanceName)(a, b));
								} else {
									index = 1;
									while (index < objectSchemaLength) {
										instanceName = objectSchema[index];
										// @ts-ignore
										if (advValues[0] instanceof globalThis[instanceName]) {
											// @ts-ignore
											advValues.sort((a, b) => sortType(instanceName)(a, b));
										};
										index++;
									}
									if (objectSchemaLength === index) advValues.sort((a, b) => sortType('Object')(a, b));
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
												nextAdvValues.sort((a, b) => sortType(instanceName)(a, b)),
												advValues,
											);
											break;
										};
										instanceIndex++;
									}
									if (objectSchemaLength === instanceIndex) {
										arrayConcatMutationCore(
											// @ts-ignore
											nextAdvValues.sort((a, b) => sortType('Object')(a, b)),
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
			}
		}
	}
}) as ArrayLikeOrderCore

export default arrayLikeOrderCore;
