/**
 * 
 * @param {Record<PropertyKey, (el: any) => any>} complex 
 * @returns {(array: ArrayElement[]) => ArrayElement[]}
 * @template ArrayElement
 */
function where (complex) {
    return function useWhere (array) {
        const { length } = array;
        let index = 0;
        const filtered = new Array();
        loopList: while (index < length) {
            const element = array[index];
            checkProperty: for (const key in complex) {
                // @ts-ignore
                if (complex[key](element[key])) continue checkProperty;
                index++;
                continue loopList;
            }
            filtered.push(element);
            index++;
        }

        return filtered;
    }
}

module.exports = where;