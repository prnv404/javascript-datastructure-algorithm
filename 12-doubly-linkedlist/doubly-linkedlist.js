/*A doubly linked list is a type of linked list in which each node in the list has two 
pointers, one pointing to the previous node and one pointing to the next node.
 This allows the list to be traversed in both directions, from the beginning to the
  end and from the end to the beginning. It is called a "doubly" linked list because
   each node has two links (pointers) associated with it, as opposed to a singly linked list
    which has only one link (pointer) associated with each node.  */



class Node {
	constructor(val) {
		this.val = val
		this.next = null
		this.prev = null
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

/**
 * We create a new node with the value passed to the function. If there is no head property on the
 * list, set the head and tail to be the newly created node. If there is a head, set the next property
 * on the tail to be that node, and set the previous property on the newly created node to be the tail.
 * Set the tail to be the newly created node. Increment the length by one. Return the list
 * @param val - The value of the new node.
 * @returns The new node is being returned.
 */
	push(val) {
		const newNode = new Node(val)
		if (!this.head) {
			this.head = newNode
			this.tail = newNode
		} else {
			this.tail.next = newNode
			newNode.prev = this.tail
			this.tail = newNode
		}
		this.length++
		return this
	}

	/**
	 * We're removing the last node from the list and returning it
	 * @returns The tail node is being returned.
	 */
	pop() {
		if (!this.tail) return undefined
		let tail = this.tail
		if (this.length === 1) {
			this.head = null
			this.tail = null
		} else {
			this.tail = tail.prev
			this.tail.next = null
		}
		this.length--
		return tail
	}

	/**
	 * We're removing the first node from the list and returning it
	 * @returns The head of the list is being returned.
	 */
	shift() {
		if (!this.head) return undefined
		let head = this.head
		if (this.length === 1) {
			this.head = null
			this.tail = null
		} else {
			this.head = head.next
			this.head.prev = null
			head.next = null
		}
		this.length--
		return head
	}


/**
 * We create a new node, and if there is no head, we set the head and tail to be the new node.
 * Otherwise, we set the new node's next to be the current head, the current head's prev to be the new
 * node, and the head to be the new node
 * @param val - The value of the node we're adding.
 * @returns The new node is being returned.
 */
	unShift(val) {
		const newNode = new Node(val)
		if (!this.head) {
			this.head = newNode
			this.tail = newNode
		} else {
			this.head.prev = newNode
			newNode.next = this.head
			this.head = newNode
			this.length++
			return this
		}
	}

	/**
	 * We check if the index is valid, then we check if the index is closer to the head or the tail, and
	 * then we traverse the list from the closest end until we reach the index
	 * @param index - The index of the node you want to get.
	 * @returns The node at the given index.
	 */
	get(index) {
		if (index < 0 || index >= this.length) return null
		let current = undefined
		let count = undefined
		if (index <= this.length / 2) {
			count = 0
			current = this.head
			while (count !== index) {
				current = current.next
				count++
			}
			return current
		} else {
			count = this.length - 1
			current = this.tail
			while (count !== index) {
				current = current.prev
				count--
			}
			return current
		}
	}

	/**
	 * If the index exists, set the value of the node at that index to the value passed in
	 * @param index - the index of the node you want to change
	 * @param val - the value to insert
	 * @returns The value of the node at the given index.
	 */
	set(index, val) {
		let getNode = this.get(index)
		if (getNode !== null) {
			getNode.val = val
			return true
		} else return false
	}

	/**
	 * We create a new node, find the node before the index we want to insert at, and then set the new
	 * node's next to the node after the index we want to insert at, and then set the new node's prev to
	 * the node before the index we want to insert at, and then set the node before the index we want to
	 * insert at's next to the new node, and then set the node after the index we want to insert at's prev
	 * to the new node, and then increment the length of the list
	 * @param index - the index where you want to insert the new node
	 * @param val - the value to be inserted
	 * @returns The return value is a boolean.
	 */
	insert(index, val) {
		if (index < 0 || index > this.length) return false
		if (index === 0) return !!this.unShift(val)
		else if (index === this.length) return !!this.push(val)
		let newNode = new Node(val)
		let beforeNode = this.get(index - 1)
		let afterNode = beforeNode.next
		if (beforeNode !== null) {
			newNode.prev = beforeNode
			newNode.next = afterNode
			afterNode.prev = newNode
			beforeNode.next = newNode
			this.length++
		}
		return true
	}

/**
 * We're going to get the node at the index we want to remove, then we're going to set the previous
 * node's next property to the node after the node we want to remove, and we're going to set the next
 * node's previous property to the node before the node we want to remove
 * @param index - The index of the node you want to remove.
 * @returns The node that was removed.
 */
	remove(index) {
		if (index < 0 || index > this.length) return false
		if (index === 0) return !!this.shift()
		else if (index === this.length - 1) return !!this.pop()
		let node = this.get(index)
		if (node !== null) {
			let afternode = node.next
			let beforenode = node.prev
			beforenode.next = afternode
			afternode.prev = beforenode
			node.next = null
			node.prev = null
			this.length--
		}
		return true
	}
}

const list = new DoublyLinkedList()

list.push(1)
list.push(2)
list.push(3)
list.push(4)
console.log(list.remove(1))
console.log(list)
// console.log(lis)
