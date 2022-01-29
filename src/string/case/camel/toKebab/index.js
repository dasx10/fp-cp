/**
 * @param {string} value 
 * @returns {string}
 */
 function camelToKebabCase (value) {
    const { length } = value;
    let index = 1;
    let code, char;
    let snakeCase = value[0];
    while (index < length) {
        char = value[index]
        code = char.charCodeAt(0);
        if (code > 65 && code < 90) snakeCase += '-' + char.toLowerCase();
        else snakeCase += char;
        index++;
    }
    return snakeCase;
}

module.exports = camelToKebabCase;