// @ts-nocheck

function xor (source) {
    return function xor (expect) {
        return !(source || expect);
    }
}

module.exports = xor;