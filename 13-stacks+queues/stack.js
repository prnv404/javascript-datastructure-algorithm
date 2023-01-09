/* A stack is a data structure that operates on a last-in-first-out (LIFO) basis.
 It has two primary operations: push and pop. Push adds an element to the top of 
 the stack, and pop removes an element from the top of the stack.

A common example of a stack is a stack of plates in a cafeteria. The plate that was 
added last is the one that is removed first (i.e., the plate on the top of the stack).

Stacks are often used to implement undo/redo functionality in applications, as well
 as to evaluate expressions in programming languages. */


 
// Here is an implementation of stack using singly linked list

class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class Stack {
	constructor() {
		this.first = null
		this.last = null
		this.size = 0
	}

	push(val) {
		const newNode = new Node(val)
		if (this.size < 1) {
			this.first = newNode
			this.last = newNode
		}
		const current = this.first
		this.first = newNode
		this.first.next = current
		this.size++
		return this.size
	}
	pop() {
		if (!this.first) {
			return null
        }
        let current = this.first
        if (this.first === this.last) {
            this.last  = null
        }
        this.first = this.first.next
        this.size--
        return current.value
	}
}

const stack = new Stack()

stack.push(2)
stack.push(2)
stack.push(2)
stack.push(2)
console.log(stack.push(3))
console.log(stack.pop())
