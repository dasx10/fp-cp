
const arr = new Array(33550000);
arr.fill(100);

const map = (f, a) => {
    const { length } = a;
    const newArr = new Array(length);
    let i = 0;
    while (i < length) {
        newArr[i] = f(a[i], i, a);
        // i++;
        i = -~i;
    }
    return newArr;
}

// const sum = (a) => a ^ 3;
const sum = (a) => Math.imul(a, a);

console.time('-');
map(sum, arr)
console.timeEnd('-');