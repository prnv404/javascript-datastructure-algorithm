/*A linked list is a linear data structure in which elements are stored in nodes,
 and each node points to the next node in the list. Linked lists can be used to 
 implement a variety of data structures, such as stacks, queues, and graphs.
 One advantage of linked lists over arrays is that elements can be easily inserted
 or removed from the list without the need to move other elements or allocate additional 
 memory. However, linked lists can be less efficient for certain operations, such as 
 accessing elements by index, compared to arrays.  */


/* A singly linked list is a linear data structure that consists of a sequence of nodes, 
where each node stores a reference to an object and a reference to the next node in the 
sequence. The last node in the list has a reference to null, indicating the end of the list */

class Node {
	constructor(val) {
		this.val = val
		this.next = null
	}
}


class SinglyLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	/**
	 * We create a new node using the value passed to the function, if there is no head property on the
	 * list, set the head and tail to be the newly created node, otherwise set the next property on the
	 * tail to be the new node and set the tail property on the list to be the newly created node
	 * @param val - The value of the new node.
	 * @returns The linked list
	 */
	push(val) {
		const newNode = new Node(val)
		if (!this.head) {
			this.head = newNode
			this.tail = newNode
		} else {
			this.tail.next = newNode
			this.tail = newNode
		}
		this.length++
		return this
	}
/**
 * We're going to loop through the list until we get to the second to last node, then we're going to
 * set the second to last node's next property to null, and then we're going to set the tail to the
 * second to last node
 * @returns The last node in the list.
 */

	pop() {
		if (!this.head) return undefined
		let current = this.head
		let newTail = current

		while (current.next) {
			newTail = current
			current = current.next
		}

		this.tail = newTail
		newTail.next = null
		this.length--
		if (this.length === 0) {
			this.head = null
			this.tail = null
		}
		return current.val
	}
/**
 * We're removing the first node from the list and returning it
 * @returns The value of the node that was removed from the beginning of the list.
 */

	shift() {
		if (!this.head) return undefined
		let current = this.head
		this.head = current.next
		this.length--
		if (this.length === 0) {
			this.tail = null
		}
		return current.val
	}

/**
 * We create a new node, and if there is no head, we set the head and tail to be the new node.
 * Otherwise, we set the new node to be the head, and set the new node's next property to be the
 * current head
 * @param val - The value of the node we're adding to the beginning of the list.
 * @returns The value of the new node.
 */
	unShift(val) {
		const newNode = new Node(val)
		if (!this.head) {
			this.head = newNode
			this.tail = newNode
		} else {
			let current = this.head
			this.head = newNode
			this.head.next = current
		}
		this.length++
		return newNode.val
	}

/**
 * We create a variable called counter and set it equal to 0. We then create a variable called current
 * and set it equal to the head property. Then we create a while loop that runs as long as counter is
 * less than index. Inside the while loop we set current equal to the current node's next property,
 * then increment counter by 1. Finally, we return current
 * @param index - The index of the node you want to get.
 * @returns The node at the given index
 */
	get(index) {
		if (index < 0 || index >= this.length) return null
		let counter = 0
		let current = this.head
		while (counter !== index) {
			current = current.next
			counter++
		}
		return current
	}

	/**
	 * We're going to get the node at the index we want to change, and if it exists, we're going to change
	 * its value to the value we want to change it to
	 * @param index - The index of the node you want to change
	 * @param val - the value to insert
	 * @returns The value of the node at the given index.
	 */
	set(index, val) {
		const node = this.get(index)
		if (node) {
			node.val = val
			return true
		}
		return false
	}

	/**
	 * We create a new node with the value passed to the function, then assign the new node's next
	 * property to be the previous node's next property, then assign the previous node's next property to
	 * be the new node
	 * @param index - the index where you want to insert the new node
	 * @param val - the value to be added to the list
	 * @returns The return value is a boolean.
	 */
	insert(index, val) {
		if (index < 0 || index > this.length) return false
		if (index === this.length) return !!this.push(val)
		if (index === 0) return !!this.unShift(val)
		let newNode = new Node(val)
		let prev = this.get(index - 1)
		let temp = prev.next
		prev.next = newNode
		newNode.next = temp
		this.length++
		return true
	}

	/**
	 * We get the node before the one we want to remove, and then we update its next pointer to skip the
	 * node we want to remove
	 * @param index - The index of the node we want to remove.
	 * @returns The node that was removed.
	 */
	remove(index) {
		if (index < 0 || index > this.length) return false
		if (index === this.length - 1) return this.pop()
		if (index === 0) return this.shift()
		let prev = this.get(index - 1)
		let removeNode = prev.next
		prev.next = prev.next.next
		this.length--
		return removeNode
	}

	/**
	 * We set the head to the tail, the tail to the head, and then we iterate through the list,
	 *  setting the next node to the previous node, and the previous node to the next node
	 */
	reverse() {
		let node = this.head
		this.head = this.tail
		this.tail = node
		let next
		let prev = null
		for (let i = 0; i < this.length; i++){
			next = node.next
			node.next = prev
			prev = node
			node = next
		}
		return this
	}

}

const list = new SinglyLinkedList()


list.push(1)
list.push(2)
list.push(3)

list.pop()

list.get(2) //3

list.set(2, 4) 

list.shift()

list.unShift(1)

list.insert(2, 10)

list.remove(2)

list.reverse()


/*
The time complexity of the various operations on a linked list depends on the implementation and the specific
 operation being performed. Here are the average-case time complexities for some common linked list operations:

    Accessing an element by index: O(n), where n is the index of the element.
    Searching for an element: O(n), where n is the number of elements in the list.
    Inserting or deleting an element at the beginning or end of the list: O(1).
    Inserting or deleting an element in the middle of the list: O(n), where n is the number of elements in the list.

Keep in mind that these are average-case time complexities and the worst-case time complexities may be different. 
For example, the worst-case time complexity for inserting or deleting an element at the beginning or end of a 
singly linked list is O(1), but the worst-case time complexity for inserting or deleting an element in the middle 
of a singly linked list is O(n).

It's also worth noting that the space complexity of a linked list is O(n), where n is the number of elements in
 the list, because each element in the list requires a separate node to store it and its next reference
  */
