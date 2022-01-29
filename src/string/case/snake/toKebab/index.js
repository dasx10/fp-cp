/**
 * @typedef {SnakeString extends `${infer First}_${infer Next}` ? `${First}-${SnakeToKebabCase<Next>}` : SnakeString} SnakeToKebabCase
 * @template {string} SnakeString
 */

/**
 * @param {SnakeString} string 
 * @returns {SnakeToKebabCase<SnakeString>}
 * @template {string} SnakeString
 * @example
 * snakeToKebabCase('user_full_name'); // 'user-full-name'
 * snakeToKebabCase('user_email'); // 'user-email'
 */
function snakeToKebabCase (string) {
    // @ts-ignore
    return string.replace(/-/g, '_');
}

module.exports = snakeToKebabCase;