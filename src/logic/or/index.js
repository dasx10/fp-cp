// @ts-nocheck
function or (source) {
    return function useOr (expect) {
        return expect || source;
    }
}