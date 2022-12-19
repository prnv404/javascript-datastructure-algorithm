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
  
