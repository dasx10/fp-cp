// // @ts-nocheck
// function newGap(gap) {
//     gap /= 1.3;
//     if (gap < 1) return 1;
//     else if (gap == 9 || gap == 10) return 11;
//     return gap;
// }

// function sortComb(A)                // Функция сортировки расчёской.
// {   var n = A.length, gap = n;
//     do {
//         let swapped = false;
//         gap = newGap(gap);
//         for (var i=0; i<n-gap; ++i) {
//             if (A[ i ] > A[i+gap]) {
//                 swapped = true;
//                 [A[i+gap], A[i]] = [A[i], A[i+gap]];
//             }
//         }
//     } while (gap > 1 || swapped);
//     return A;
// }

// module.exports = sortComb;