/* 
Insertion sort is a simple sorting algorithm that works by iterating through an array
 and inserting each element into its correct position in a partially sorted array. 
 It is an in-place algorithm, meaning it does not require any additional memory to 
 perform the sorting. Insertion sort has a time complexity of O(n^2) in the worst case,
  making it less efficient for sorting large arrays. However, it can be useful for small 
  arrays or partially sorted arrays.
*/

/**
 * We start at the second element in the array and compare it to the element before it. If the element
 * before it is larger, we swap the two elements. We then move to the third element and compare it to
 * the element before it. If the element before it is larger, we swap the two elements. We continue
 * this process until we reach the end of the array
 */

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]
        for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = current
    }
    return arr
}

console.log(insertionSort([2, 4, 1, 5, 6]))

