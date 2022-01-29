// @ts-nocheck
/**
 * @param {Executor & (key: keyof InputRecord & string, value: InputRecord[keyof InputRecord], record: InputRecord) => PropertyKey} executor 
 * @returns {(record: InputRecord & Record<PropertyKey, any>) => Record<string, InputRecord<keyof InputRecord>>}
 * @template Executor
 * @template InputRecord
 */
function mapKeys (executor) {
    return function useMapKeys (record) {
        const mapped = Object.create(record);
        for (const key in record) {
            /** @type {InputRecord[keyof InputRecord]} */
            const value = record[key];
            mapped[executor(key, value, record)] = value;
        }
        return mapped;
    }
}

module.exports = mapKeys;