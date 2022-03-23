/**
 * @param {string | RegExp} searchValue
 * @returns {(string: string) => RegExpMatchArray | null}
 */
function match (searchValue) {
    return function useMatch (string) {
        return string.match(searchValue);
    }
}