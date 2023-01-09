/*A queue is a data structure that stores a collection of items in a first-in, first-out (FIFO) manner.
 This means that items are added to the end of the queue, and are removed from the front of
  the queue. 
   Some common operations that can be performed on a queue include adding items to the end of 
   the queue (enqueue), removing items from the front of the queue (dequeue)
  */


class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class Queue {
	constructor() {
		this.first = null
		this.last = null
		this.size = 0
	}

	enqueue(val) {
		const newNode = new Node(val)
		if (!this.first) {
			this.first = newNode
			this.last = newNode
		} else {
			this.last.next = newNode
			this.last = newNode
		}
		return ++this.size
	}

	dequeue() {
		if (!this.first) {
			return null
		}
		const current = this.first
		if (this.first === this.last) {
			this.last = null
		}
		this.first = this.first.next
		this.size--
		return current.value
	}
}

const q = new Queue()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
console.log(q.enqueue()) //1



