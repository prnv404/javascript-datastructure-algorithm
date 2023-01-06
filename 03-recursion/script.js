/* 
Recursion is a programming technique in which a function calls itself with a modified
 input in order to solve a problem. It can be a useful tool for solving certain types
  of problems because it allows you to divide a problem into smaller subproblems and 
  solve each subproblem individually.

One of the main advantages of using recursion is that it can allow you to write more concise 
and elegant code. It can also make it easier to write and understand code, especially when
 dealing with complex problems that involve multiple nested iterations or a large number of 
 branching conditions.

There are also some problems that are naturally recursive in nature, and recursion may be
 the most intuitive or straightforward way to solve them. For example, problems that involve 
 traversing a tree or other recursive data structure, or problems that involve dividing a 
 problem into smaller subproblems and then combining the results of those subproblems, are
  often best solved using recursion.

However, it is important to note that recursion can also be slower and more memory-intensive 
than iterative solutions, so it is not always the best choice for every problem. 
It is important to consider the trade-offs and choose the approach that is most appropriate 
for the specific problem you are trying to solve
 */

function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  console.log(factorial(5)); // 120

  /* 
  Recursion can be a powerful tool for solving problems, but it also has some potential
   pitfalls that you should be aware of:

    Infinite recursion: This occurs when a recursive function calls itself indefinitely, 
    resulting in an infinite loop. This can happen if the base case is not properly defined 
    or if the recursive calls are not properly reduced towards the base case.

    Performance: Recursive algorithms can be slower and require more memory than iterative 
    algorithms because they involve function calls, which take up space on the call stack.
     This can be a problem for very large input sizes or for recursive algorithms with many
      levels of recursion.

    Code readability: Recursive algorithms can be difficult to read and understand,
     especially for those who are not familiar with the concept of recursion.
      It can be hard to follow the logic of the recursive calls and understand how the
       function is working.

    Debugging: Debugging recursive algorithms can be challenging because it can be
     difficult to visualize the state of the function at each recursive call.
  
  */
  
  
