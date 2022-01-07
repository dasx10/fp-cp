/**
 * @param {string} string
 * @return {string}
 */
function numeric (string) {
    return string.replace(/[^0-9]/g, '');
}