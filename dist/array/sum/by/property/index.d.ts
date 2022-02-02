declare function sumByProperty<Key extends PropertyKey>(propertyName: Key): (array: Record<Key, number>[]) => number;
export default sumByProperty;
