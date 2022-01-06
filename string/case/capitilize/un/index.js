/**
 * @param {Value & string} string 
 * @returns {Uncapitalize<Uppercase<Value>>}
 * @template Value 
 */
function uncapitalize (string) {
    return string.substr(0, 1).toLowerCase() + string.substr(1).toUpperCase();
}