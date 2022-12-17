/* 

What is Big O notation ?

Big O notation is a way to describe how long an algorithm takes to run in terms 
of how large the input is.It gives an upper bound on the number of steps the algorithm takes.

The "O" in "Big O" stands for "order," so Big O notation gives the order of growth of an algorithm.
It's a way to describe how the running time of an algorithm scales as the input size grows



Here are some basic Big O expressions

. O(1) - represent an algorithm that takes constant number of steps , regardles the size of inputs

. O(log n) - represnet an algorithm that takes logarithmic number of steps , this means that the number of steps 
        increase logaritmically with the size of input

. O(n) - represnt an algorithm that takes linear number of steps , this means that the number of steps increase 
        linearley with size of the input 
        
. O(n log n) - represents an algorithm that takes logaritmic number of steps for each element in the input 
            . This is often the time complexity of efficent sorting algorithm 
            
. O(n^2) - represents an algorithm that takes a quadratic number of steps . This means that the number of steps is 
            proportional the square of the size of input 

. O(n^3) - represents an algorithm that takes a cubic number of steps. This means that the number of steps is
            proportional to the cube of the size of the input.

. O(2^n) - represents an algorithm that takes an expotential number of steps . This means that the number of steps 
            grows expotentially with the size of input 

. O(n!) - represents an algorithm that takes a factorial number of steps . This means that the number of the steps 
            is equal to the factorial of the size of input 



// Time complexity 

/* 
time complexity in js

1. Arithematic operations are constant
2. Variable assignment is constant
3. Accessing elements in Array (by index) or Object (by key) is constant
4. In a loop , the complexity is the length of the loop time the complexity of whatever 
    happens inside of the loop

*/

/* 
Let consider an example writing a functions for finding the sum of a series of numbers
if the number is 3 then the result mustbe 1+2+3 = 6
*/

// this function has the time complexity of O(n)
// the number of steps will increase when the innput increase

function addNumbers1(num) {
    let sum = 0

    for (let i = 0; i <= num; i++){
        sum += i 
    }

    return sum

}

// same function with time complexity of O(1)
// number of steps remain constant, dosen't matter the input increases

function addNumbers2(num) {
    const sum = n * (n + 1) /2 
    return sum
}


// Space complexity 

/* 
 space complexity in js

 1. Most primitives (booleans,numbers,undefiend,null) are constant 
 2. Strings required O(n) space (where n is the String length)
 3. Reference types are generally O(n) ,where n is the length (for arrays) or the number of keys (for objects)

*/

// Examples

//  Sum takes an array of numbers and returns the sum of those numbers.

// this function has space complexity of O(1)
function sum(arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total
}


//   For each element in the array, double it and add it to a new array.
 
// another function with space complexity of O(n)
function double(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        newArr.push(2 * arr[i])
    }
    return newArr
}


/*

 Use cases of Big O ?

 Big O notation is used to describe the performance of algorithms and to compare the efficiency of different 
 algorithms. It's a way to measure how well an algorithm scales as the size of the input increases.

One common use case for Big O notation is in the analysis of algorithms. By understanding the performance
 of an algorithm, we can determine which algorithm is the most efficient for a given problem. 
 This is especially important when dealing with large inputs, as the performance of an algorithm can have
  a significant impact on its practicality.

Big O notation is also used in the design of algorithms. By understanding the performance of different algorithms,
 we can choose an algorithm that is well-suited for the problem at hand. For example, if we need to sort a large
  dataset, we might choose an algorithm that has an O(n log n) time complexity, as it will be more efficient 
  than an algorithm with an O(n^2) time complexity.

Big O notation is also useful in the analysis of data structures. By understanding the performance of different
 data structures, we can choose a data structure that is well-suited for the problem at hand. For example, if we 
 need to store a large number of elements and need fast insertion and deletion times, we might choose a data 
 structure like a hash table, which has an O(1) time complexity for these operations.

Overall, Big O notation is a useful tool for understanding the performance and efficiency of algorithms
 and data structures, and it is widely used in computer science to analyze and compare the efficiency of different
  approaches to solving problems.

*/