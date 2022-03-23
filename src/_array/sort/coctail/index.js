// // @ts-nocheck
// function sortShaker(A) {
//     var
//     i = 0,
//     j = A.length - 1,
//     s = true,
//     t,
//     nextIndex;
//     while (i < j && s) {
//         s = false;
//         for (var k = i; k < j; k++) {
//             nextIndex = k+1;
//             if (A[k] > A[nextIndex]) {
//                 t = A[k];
//                 A[k] = A[nextIndex];
//                 A[nextIndex] = t;
//                 s = true;
//             }
//         }
//         j--;
//         if (s) {
//             s = false;
//             for (var k = j; k > i; k--) {
//                 nextIndex = k - 1;
//                 if (A[k] < A[nextIndex]) {
//                     t = A[k];
//                     A[k] = A[nextIndex];
//                     A[nextIndex] = t;
//                     s = true;
//                 }
//             }
//         }
//         i++;
//     }

//     return A;
// }

// module.exports = sortShaker;