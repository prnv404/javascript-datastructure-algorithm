/*  
bubble sort is an algorithm for sorting a list of elements. It works by repeatedly
 iterating through the list, comparing adjacent elements, and swapping them if they 
 are in the wrong order. The algorithm continues until it completes a pass through the
  list without making any swaps, at which point the list is considered sorted. Bubble 
  sort is a simple and intuitive sorting algorithm, but it is not very efficient for large 
  lists because it has a time complexity of O(n^2), which means that it takes longer to sort
   lists with more elements. It is generally better to use a more efficient sorting algorithm,
    such as quicksort or mergesort, for large lists.
*/


/**
 * We iterate through the array, and if the current element is greater than the next element, we swap
 * them
 * @param arr - the array to be sorted
 * @returns [1,2,3,4,5,6,7,8,9]
 */

function bubbleSort(arr) {
    let swap
    for (let i = arr.length - 1; i > 1; i--){
         swap = true
        console.log('iteration')
        for (let j = 0; j < i; j++){
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1]
                arr[j+1] = arr[j]
                arr[j] = temp
                swap = false
            }
        }
        if (swap)  break
    }
    return arr

}

console.log(bubbleSort([9,1,2,3,4,5,6,7,8]))