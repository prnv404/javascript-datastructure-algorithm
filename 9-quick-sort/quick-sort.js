/*  
Quicksort is a fast and efficient sorting algorithm that uses a divide and conquer
 approach to sort a list of items. It has an average case time complexity of 
 O(n log n) and is usually faster than other O(n log n) algorithms such as merge 
 sort.

Quicksort works by selecting a "pivot" element from the list and partitioning the
 other elements into two lists based on whether they are less than or greater than
  the pivot. The two sublists are then recursively sorted using the same process,
   and this continues until the entire list is sorted.

One of the benefits of quicksort is that it is an "in-place" sorting algorithm, 
meaning that it does not require additional storage space to perform the sorting.
 This makes it a good choice for sorting large lists on devices with limited
  memory. However, quicksort can be slower than other algorithms in the 
  worst case, so it is important to choose an appropriate pivot element to
   ensure good performance.
*/


/**
 * We're going to take the first element in the array and use it as a pivot. We're going to compare
 * each element in the array to the pivot and if the element is less than the pivot, we're going to
 * swap it with the element to the right of the pivot
 * @param arr - the array we're sorting
 * @param [start=0] - the index of the first element in the array
 * @param [end] - the last index of the array
 * @returns The index of the pivot
 */
function pivotHelper(arr, start = 0, end = arr.length - 1) {

    let pivot = arr[start]
    
	let swapIndex = start

    for (let i = start + 1; i <= end; i++) {
        
        if (pivot > arr[i]) {
            
            swapIndex++
            
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]]
            
		}
    }
    
    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]]

    return swapIndex
    
}


/**
 * We're going to recursively call quickSort on the left and right sides of the pivot until the left
 * and right pointers cross
 * @param arr - the array we're sorting
 * @param [left=0] - the left most index of the array
 * @param [right] - the last index of the array
 * @returns The pivot index
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
    
    if (left < right) {

        let pivotIndex = pivotHelper(arr, left, right)
        
        quickSort(arr, left, pivotIndex - 1)

        quickSort(arr, pivotIndex + 1, right)
        
    }

    return arr

}

console.log(quickSort([3,1,66,33,9,7,6]))
