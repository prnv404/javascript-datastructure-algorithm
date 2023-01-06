/**
Binary search is an efficient algorithm for finding an element in a sorted list or array. 
It works by repeatedly dividing the search area in half and comparing the search key to the
 middle element of the search area. If the search key is smaller than the middle element, 
 the search continues in the lower half of the search area. If the search key is larger than
  the middle element, the search continues in the upper half of the search area. This process
   is repeated until the key is found or the search area is empty.
*/



function binarySearch(arr, key) {
	let left = 0
	let right = arr.length - 1
	while (left <= right) {
		let mid = Math.floor((left + right) / 2)
		if (arr[mid] === key) {
			return mid
		} else if (arr[mid] < key) {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}
	return -1
}

/*
  This function takes an array arr and a search key key as arguments and returns the
  index of the first occurrence of the key in the array, or -1 if the key is not found.
  */

let arr = [1, 3, 5, 7, 9]
let key = 5
let index = binarySearch(arr, key)
console.log(index) // Outputs 2

/* 
Binary search has a time complexity of O(log n), which means that it takes logarithmic 
time to search for an element in a list of size n. This makes it more efficient than linear
 search for larger lists, but it requires that the list be sorted in advance
*/

