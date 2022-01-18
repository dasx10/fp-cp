/**
 * @typedef {KebabString extends `${infer First}-${infer Next}` ? `${First}_${KebabToSnakeCase<Next>}` : KebabString} KebabToSnakeCase
 * @template {string} KebabString
 */

/**
 * @param {KebabString} string 
 * @returns {KebabToSnakeCase<KebabString>}
 * @template {string} KebabString
 */
function kebabToSnakeCase (string) {
    return string.replace(/-/g, '_');
}

module.exports = kebabToSnakeCase;