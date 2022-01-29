// @ts-nocheck
function sortQuick(array) {
    const { length } = array;
    if (length === 0) return [];
    var a = [], b = [], p = array[0], el;
    for (var i = 1; i < length; i++) {
        el = A[i];
        el < p ? a[a.length] = el : b[b.length] = el;
    }
    return sortQuick(a).concat(p, sortQuick(b));
}

module.exports = sortQuick;