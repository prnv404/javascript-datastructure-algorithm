/*  
Divide and conquer is a technique for solving problems by dividing them into smaller
 subproblems, solving the subproblems, and then combining the solutions to the
  subproblems to solve the original problem. This technique is often used to solve
   problems that can be difficult or inefficient to solve directly, but that can be 
   divided into smaller, more manageable problems that are easier to solve.
*/

/* 
For example, consider the problem of finding the maximum element in an array of numbers.
 One way to solve this problem using divide and conquer is to divide the array in half, 
 find the maximum element in each half, and then return the maximum of the two maximum
  elements. This can be implemented in JavaScript as follows:
*/

function findMax(arr) {
   if (arr.length === 1) {
     return arr[0];
   }
   const mid = Math.floor(arr.length / 2);
   const left = arr.slice(0, mid);
   const right = arr.slice(mid);
   const maxLeft = findMax(left);
   const maxRight = findMax(right);
   return Math.max(maxLeft, maxRight);
 }

 /*
 This function uses recursion to divide the array into smaller subarrays until it 
 reaches an array with a single element, at which point it returns that element.
  It then combines the maximum elements of the left and right halves to find the overall
   maximum element in the original array.
  */
 
console.log(findMax([1, 3, 2, 5, 4]));  // prints 5
console.log(findMax([-1, -3, -2, -5, -4]));  // prints -1

/* 
Note that this algorithm has a time complexity of O(n log n) because it divides the array into 
smaller subarrays and combines the solutions in each recursive step. This makes it more 
efficient than some other techniques
*/
