/**
 * @param {string} value 
 * @returns 
 */
function pascalToSnakeCase (value) {
    const { length } = value;
    let index = 1;
    let code, char;
    let snakeCase = value[0].toLowerCase();
    while (index < length) {
        char = value[index]
        code = char.charCodeAt();
        if (code > 65 && code < 90) snakeCase += '_' + char.toLowerCase();
        else snakeCase += char;
        index++;
    }
    return snakeCase;
}

module.exports = pascalToSnakeCase;