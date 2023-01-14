class MaxBinaryHeap {
	constructor() {
		this.value = []
	}

	insert(value) {
		// we first set the value to end of the array
		this.value.push(value)
		const arr = this.value
		let index = arr.length - 1
		// then we need to find the parent of that child
		let idx = Math.floor((index - 1) / 2)
		// we loop and swap the elements when the child is greater than parent
		while (arr[idx] < arr[index] && index !== 0) {
			[arr[index], arr[idx]] = [arr[idx], arr[index]]
			index = idx
			idx = Math.floor((index - 1) / 2)
		}
		return arr
	}

	extMax() {
		let arr = this.value
		// if array is greater than one element we swap the last element and first element
		if (arr.length > 0) {
			let temp = arr[0]
			arr[0] = arr[arr.length - 1]
			arr[arr.length - 1] = temp
		}
		// and then we remove it from last because we can acheive O(1) when we remove from last
		const max = arr.pop()
		// we track of three things element length and index we gonna swap
		let length = this.value.length
		let element = arr[0]
		let idx = 0
		// the loop countiue until its there is no swap
		while (true) {
			// initialize the childs index of parent
			let leftChildIdx = 2 * idx + 1
			let rightChildIdx = 2 * idx + 2
			let leftchild, rightchild
			let swap = null
			// this condition will go through when the leftchild index is not bounce the array length
			if (leftChildIdx < length) {
				leftchild = this.value[leftChildIdx]
				// we track the index if the element is greater than the parent
				if (leftchild > element) {
					swap = leftChildIdx
				}
			}

			if (rightChildIdx < length) {
				rightchild = this.value[rightChildIdx]
				// here is two condition one is true we need to set swap to right child index
				// if the left child is smaller than element or if the leftchild is smaller than right child
				if (
					(swap === null && rightchild > element) ||
					(swap !== null && rightchild > leftchild)
				) {
					swap = rightChildIdx
				}
			}
			if (swap === null) break
			// and we swap the element's
			[this.value[idx], this.value[swap]] = [this.value[swap], this.value[idx]]
			// set the parent index to swaped index
			idx = swap
		}
		return max
	}
}

const heap = new MaxBinaryHeap()

heap.insert(41)
// heap.insert(39)
// heap.insert(33)
// heap.insert(18)
// heap.insert(27)
// heap.insert(12)
// heap.insert(55)
// heap.insert(1)
// heap.insert(45)
// heap.insert(100)
// console.log(heap)
console.log(heap.extMax())
console.log(heap.extMax())
console.log(heap)
