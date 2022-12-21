/*
Linear search is a simple algorithm for finding an element in a list or array.
 It works by iterating over the elements of the list one by one and comparing each
  element to the search key. If the element is found, the search is successful and
   the index of the element is returned. If the element is not found, the search is 
   unsuccessful and the function returns a special value indicating that the element
    was not found
*/

function linearSearch(arr, key) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === key) {
        return i;
      }
    }
    return -1;
  }

let arr = [1, 3, 5, 7, 9];
let key = 5;
let index = linearSearch(arr, key);
console.log(index); // Outputs 2

/* 
Linear search has a time complexity of O(n), which means that it takes linear time 
to search for an element in a list of size n. This makes it relatively efficient for 
small lists, but it can become slow for large lists. For larger lists, it is generally
 more efficient to use a search algorithm with a lower time complexity, such as binary search.
 
*/
