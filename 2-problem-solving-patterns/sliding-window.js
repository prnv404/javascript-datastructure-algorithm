/**
 *  The sliding window pattern is a technique used to perform a particular operation on a 
 * sequence of elements, typically an array or a string. It involves creating a window that 
 * slides over the sequence, performing the operation on the elements within the window,
 *  and moving the window forward by a certain number of elements after each iteration
 * The sliding window pattern is a useful technique for solving problems that involve finding
 *  patterns or subproblems within a larger sequence of elements. It can be used to solve 
 * problems such as finding the longest repeating character in a string, finding the minimum 
 * number of operations needed to make a string palindromic, or finding the maximum sum
 *  of a contiguous subarray within an array.
*/
  

// Example 

/**
 * Write a function called maxSubArray which accepts an array of integers 
 * and a number called n .The function should calculate the the maximum 
 * sum of n consecutive elements in array 
 */

// Naive approach

/**
 * We loop through the array, and for each element we loop through the next num elements 
 * and add them to a temp variable. If the temp variable is greater than the sum variable,
 *  we set sum to temp
 */


function maxSubArray1(arr, num) {
    if(num>arr.length) return null
    let sum = -Infinity
    for (let i = 0; i < arr.length-num+1; i++){
        temp = 0
        for (let j = 0; j < num; j++){
            temp += arr[i+j]
        }
        if (temp > sum) {
            sum = temp
        }
    }
    return sum
}

// console.log(maxSubArray1([1, 2, 3, 5]),3) //10


// using sliding window approach 

/**
 * We start with a maxSum variable that is equal to the sum of the first subarray. We then loop through
 * the array starting at the end of the first subarray and subtract the first element of the subarray
 * and add the next element of the array. We then compare the new sum to the maxSum and if it's
 * greater, we set maxSum equal to the new sum
 */
function maxSubArray2(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum
}


  console.log(maxSubArray2([2,6,9,2,1,8,5,6,3],3))
  