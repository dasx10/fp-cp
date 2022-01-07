function erase (searchValue) {
    return function useErase (string) {
        return string.replace(searchValue, '');
    }
}

module.exports = erase;