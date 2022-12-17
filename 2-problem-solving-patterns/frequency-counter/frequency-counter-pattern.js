/**
 * The frequency counter pattern is a technique for solving problems that involves comparing
 *  the frequency of elements in different collections. It is often used to compare the
 * frequency of elements in two arrays to determine if they are equal or to find the missing
 * element in an array.
 * To implement the frequency counter pattern in JavaScript, you can use an object to store the
 * counts of each element in an array. You can then loop through the array and increment the
 * count for each element in the object.
 * This can often avoid the need for nested loops or O(n^2) operations with arrays/strings
 */

// Examples

/**
 * wrire a function called same , which accepts two arrays . The function should return
 * true if every value in the array has it corresponding value squared in the second array
 * the frequency of values must be same
 */


//  * We loop through the first array and check if the square of each element exists in 
//    the second array.
//  * If it does, we remove it from the second array. If it doesn't, we return false
 
function same(arr1, arr2) {
	if (arr1.length !== arr2.length) return false
	
	for (let item of arr1) {
		const index = arr2.indexOf(item * item)

		if (index === -1) {
			return false
		}
		arr2.splice(index, 1)
	}
	return true
}

console.log(same([1, 2, 3], [1, 4, 9])) // true
console.log(same([1, 2, 4], [1, 4, 2])) //false
console.log(same([1,2,1],[4,4,1])) //false (must be same frequency)

/* 
    this function has the time complexity of O(n^2) because the indexOf methods loops through
    the second array
*/

// Another example with frequency counter pattern with time complexity of O(n)

/**
 * We create two objects, one for each array. We then loop through each array and add the number of
 * times each item appears in the array to the object. We then loop through the first object and check
 * if the square of each key is in the second object. If it is, we check if the value of the key in the
 * first object is equal to the value of the key squared in the second object. If it is, we continue.
 * If it isn't, we return false. If we get through the loop, we return true
 */
 function frequencySame(arr1,arr2) {
    
    if (arr1.length !== arr2.length) return 
    
    const frequency1Counter1 = {}
    const frequencyCounter2 = {}
    
    for (let item of arr1) {
        frequency1Counter1[item] = (frequency1Counter1[item] || 0) + 1
    }

    for (let item of arr2) {
        frequencyCounter2[item] = (frequencyCounter2[item] || 0) + 1
    }

    for (const key in frequency1Counter1) {
        if (!(key**2  in frequencyCounter2)) return false
        if (frequencyCounter2[key ** 2] !== frequency1Counter1[key]) return false
    }
    return true
}

console.log(frequencySame([1, 2, 3], [1, 4, 9])) // true
console.log(frequencySame([1, 2, 4], [1, 4, 2])) //false
console.log(frequencySame([1,2,1],[4,4,1])) //false (must be same frequency)