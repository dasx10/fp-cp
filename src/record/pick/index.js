// @ts-ignore
const { create, hasOwn } = Object;

/**
 * 
 * @param  {Keys} keys 
 * @returns {(record: InputRecord) => Pick<InputRecord, keys>}
 * @template {string[]} Keys
 * @template {Partial<Record<string, any>>} InputRecord
 */
function pick (...keys) {
    const { length } = keys;
    return function usePick (record) {
        const picked = create(record);
        let index = 0;
        const isHas = hasOwn.bind(record);
        while (index < length) {
            const key = keys[index];
            // @ts-ignore
            if (isHas(record, key)) picked[key] = record[key];
            index++;
        }

        return picked;
    }
}

module.exports = pick;