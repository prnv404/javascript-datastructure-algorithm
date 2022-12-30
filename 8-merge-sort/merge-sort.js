/*
Merge sort is a sorting algorithm that works by dividing an array into two halves,
 sorting each half, and then merging the sorted halves back together. It is a divide 
 and conquer algorithm that is based on the idea of breaking down a problem into smaller, 
 subproblems and solving them recursively until the original problem is solved
*/



/**
 * We're going to take two sorted arrays and merge them into one sorted array
 */
function merge(left, right) {
    const arr = []
    let i = 0 
    let j = 0

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr.push(left[i])
            i++
        } else {
            arr.push(right[j])
            j++
        }
    }
    while (i < left.length) {
        arr.push(left[i])
        i++
    }
    while (j < right.length) {
        arr.push(right[j])
        j++
    }
    return arr
}

/**
 * We split the array in half, recursively call mergeSort on each half, and then merge the two sorted
 * halves
 */
function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left,right)
}

mergeSort([2, 5, 7, 1, 3]) //1,2,3,5,7

/*  
One of the main advantages of merge sort is that it has a time complexity of O(n * log(n)),
 which makes it highly efficient for sorting large arrays. It is also a stable sort, meaning 
 that the order of elements that compare equal will be preserved in the sorted array
*/

/* 
While merge sort is generally considered to be a good choice for sorting large arrays, 
it does have some drawbacks. It requires additional space to store the two halves of the
 array during the sorting process, which can be a problem when dealing with large arrays 
 or when memory is limited. It also tends to be slower than other sorting algorithms, 
 such as quicksort, in practice.
*/
