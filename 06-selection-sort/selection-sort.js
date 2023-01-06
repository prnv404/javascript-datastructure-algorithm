/* 
Selection sort is an algorithm for sorting an array of elements. It works by repeatedly 
finding the minimum element (also called the "minimum") from the unsorted part of the array
 and adding it to the sorted part of the array.
 */

 function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      if (i !== min) {
        [arr[i], arr[min]] = [arr[min], arr[i]];
      }
    }
    return arr;
  }
  
  /* 
  This function takes an array arr as input and returns a new array that is sorted in
   ascending order. The outer loop iterates over the elements of the array and the inner 
   loop finds the minimum element in the unsorted part of the array. If the minimum element 
   is not already at the correct position, it is swapped with the current element. 
   This process is repeated until the entire array is sorted.

Selection sort has a time complexity of O(n^2) in the worst case and O(n^2) in the average
 case, which makes it relatively inefficient for large arrays. However, it is simple to
  implement and can be useful in certain situations.
  */
  
