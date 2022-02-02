// // @ts-nocheck
// //Вспомогательная функция.
// function Merge(a, low, mid, high) {
//     var b = new Array(high + 1 - low),
//     h,
//     i,
//     j = mid + 1,
//     k,
//     h = low,
//     i = 0;

//     while (h <= mid && j <= high) { 
//         if (a[h] <= a[j]) {
//             b[i] = a[h];
//             h++;
//         } else {
//             b[i] = a[j];
//             j++;
//         }
//         i++;
//     }

//     if (h > mid) for (k = j; k <= high; k++, i++) b[i] = a[k];
//     else for (k = h; k <= mid; k++, i++) b[i] = a[k];

//     const stop = high - low;
//     for (k = 0; k <= stop; k++) a[k + low] = b[k];
//     return a;
// }

// function merge_sort(a, low, high) { 
//     if (low < high) { 
//         var mid = ~~((low+high) / 2);
//         merge_sort(a, low, mid);
//         merge_sort(a, mid + 1, high);
//         Merge(a, low, mid, high);
//     }
//     return a;
// }

// function sortMerge(A) {
//     return merge_sort(A, 0, A.length - 1);
// }

// module.exports = sortMerge;