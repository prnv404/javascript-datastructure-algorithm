/* 
Radix sort is an efficient sorting algorithm that works by sorting elements based
 on the digits of their numerical values. It can be used to sort integers, 
 floating-point numbers, and even strings, as long as they can be represented as 
 integers or floating-point numbers.

Radix sort works by sorting elements according to their digits, starting with the
 least significant digit and working up to the most significant digit. For example,
  if we are sorting a list of integers and want to sort them according to the 
  least significant digit, we would first split the list into groups based on the 
  value of the least significant digit. We would then sort each group using a 
  stable sort, such as insertion sort, and then concatenate the sorted groups
   back together.

Once we have sorted the list according to the least significant digit, we move on
 to the next most significant digit and repeat the process. We continue this
  process until we have sorted the list according to all of the digits.

Radix sort has a time complexity of O(nk), where n is the number of elements 
being sorted and k is the number of digits in the elements. This makes it a good
 choice for sorting large lists of integers or floating-point numbers, especially
  when the elements have a fixed number of digits. However, it is not a good 
  choice for sorting lists of strings, as the time complexity becomes O(n * k * l),
   where l is the length of the strings, which can be much larger than k.
*/


/**
 * Get the digit at the specified index in the number.
 * @param num - The number we are trying to get the digit of.
 * @param i - the current digit we are looking at
 * @returns The digit in the number at the specified index.
 */
function getDigit(num, i) {
	return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10)
}

/**
 * We take the absolute value of the number, then we use Math.log10 to get the number of digits minus
 * one, then we add one to get the number of digits
 * @param num - The number to count the digits of.
 * @returns The number of digits in the number.
 */
function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

/**
 * We loop through the array and find the maximum number of digits in the array
 * @param nums - the array of numbers
 * @returns The number of digits in the largest number in the array.
 */
function mostDigits(nums) {
    let maxDigits = 0 
    for (let i = 0; i< nums.length; i++){
        maxDigits = Math.max(maxDigits,digitCount(nums[i]))
    }
    return maxDigits
}

/**
 * We loop through each digit of the largest number, starting with the least significant digit, and put
 * each number in a bucket based on that digit
 * @param nums - The array of numbers we want to sort
 * @returns The sorted array
 */
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums)
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBucket = Array.from({ length: 10 }, () => [])
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k)
            digitBucket[digit].push(nums[i])
        }
        nums = [].concat(...digitBucket)
    }
    return nums
}

console.log(radixSort([2,4,44,22,5,5555]))