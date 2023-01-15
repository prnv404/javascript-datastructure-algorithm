class Node{
    constructor(val,priority) {
        this.value = val
        this.priority = priority
    }
}

class PriorityQueue {
	constructor() {
		this.value = []
	}

    enqueue(val, priority) {
        const newNode = new Node(val,priority)
		this.value.push(newNode)
		this.bubbleup()
    }
    
    bubbleup() {
        let idx = this.value.length - 1
        const element = this.value[idx]
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.value[parentIdx]
            if (element.priority >= parent.priority) break
            this.value[parentIdx] = element
            this.value[idx] = parent
            idx = parentIdx
        }
    }

	dequeue() {
		let arr = this.value
		if (arr.length > 0) {
			let temp = arr[0]
			arr[0] = arr[arr.length - 1]
			arr[arr.length - 1] = temp
		}
		const max = arr.pop()
		let length = this.value.length
		let element = arr[0]
		let idx = 0
		while (true) {
			let leftChildIdx = 2 * idx + 1
			let rightChildIdx = 2 * idx + 2
			let leftchild, rightchild
			let swap = null
			if (leftChildIdx < length) {
				leftchild = this.value[leftChildIdx]
				if (leftchild.priority < element.priority) {
					swap = leftChildIdx
				}
			}
			if (rightChildIdx < length) {
				rightchild = this.value[rightChildIdx]
				if (
					(swap === null && rightchild.priority < element.priority) ||
					(swap !== null && rightchild.priority < leftchild.priority)
				) {
					swap = rightChildIdx
				}
			}
			if (swap === null) break
			[this.value[idx], this.value[swap]] = [this.value[swap], this.value[idx]]
			idx = swap
		}
		return max
	}
}

const pq = new PriorityQueue()
pq.enqueue('hello', 8)
pq.enqueue('world', 4)
pq.enqueue('how', 5)
pq.dequeue()




console.log(pq)

