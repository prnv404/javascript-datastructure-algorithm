/*
Multiple pointers is a technique in computer programming that involves using more than
one pointer to reference a single data structure or array. Pointers are variables that
store the memory addresses of other variables or data structures, and multiple pointers
can be used to reference different parts of a data structure or array at the same time. 
Multiple pointers can be useful for traversing or manipulating data structures 
in a specific way or for optimizing the performance of algorithms.
 */
  
// let's consider an example 

/*  
write a function called sumZero which accepts sorted array of integers .
The function should find the first pair where the sum is 0 . Return an array 
that includes both values to zero or undefined if a pair does not exist
*/

// naive approch

function sumZero1(arr) {
    // loop through the array
    for (let i = 0; i < arr.length; i++) {
      // loop through the array again, starting at the next element
      for (let j = i + 1; j < arr.length; j++) {
        // if the sum of the two elements is zero, return an array with the two elements
        if (arr[i] + arr[j] === 0) {
          return [arr[i], arr[j]];
        }
      }
    }
    // if no pair is found, return undefined
    return undefined;
  }

// This function has a time complexity of O(n ^ 2), since it uses a nested loop to go 
// through all pairs of elements in the array.

  
console.log(sumZero1([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero1([-2, 0, 1, 3])); // undefined
console.log(sumZero1([1, 2, 3])); // undefined


// A another function with time complexity of O(n) using tow pointers
// its works only on sorted array
function sumZero2(arr) {
    let left = 0;
    let right = arr.length - 1
    
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left],arr[right]]
        } else if(sum > 0) {
            right --
        } else {
            left ++
        }
    }
    return undefined
}
 
console.log(sumZero2([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero2([-2, 0, 1, 3])); // undefined
console.log(sumZero2([1, 2, 3])); // undefined