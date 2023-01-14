class Node {
	constructor(value) {
		this.value = value
		this.right = null
		this.left = null
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null
	}

	insert(val) {
		const newNode = new Node(val)
		// check if root exist if not set root to new node
		if (this.root === null) {
			this.root = newNode
			return this
		} else {
			let current = this.root
			while (true) {
				// if we have duplicate value return undefined
				if (val === current.value) return undefined
				// if value less than current node go to the left side
				if (val < current.value) {
					// if left side is null set node to left and return
					if (current.left === null) {
						current.left = newNode
						return this
					} else {
						// if left side is not null set current to current left
						current = current.left
					}
				} else if (val > current.value) {
					//  same as left side
					if (current.right === null) {
						current.right = newNode
						return this
					} else {
						current = current.right
					}
				}
			}
		}
	}

	find(val) {
		if (this.root === null) return false
		let current = this.root
		let found = false
		while (current && !found) {
			if (val < current.value) {
				if (!current.left) current = current.left
			} else if (val > current.value) {
				if (!current.right) current = current.right
			} else {
				return true
			}
		}
		return false
	}

	BFS() {
		let visited = [],
			array = [],
			current = this.root
		visited.push(current)

		while (visited.length) {
			current = visited.shift()
			array.push(current.value)
			if (current.left) visited.push(current.left)
			if (current.right) visited.push(current.right)
		}

		return array
    }
    
    DFSPreOrder() {
        let visited = [],
            current = this.root
        
        function traverse(node) {
            visited.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(current)
        return visited
    }

    DFSPostOrder() {
        let visited = [],
            current = this.root
        
        function traverse(node) {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            visited.push(node.value)
        }
        traverse(current)
        return visited
    }

    DFSInOrder() {
        let visited = [],
            current = this.root
        
        function traverse(node) {
            if (node.left) traverse(node.left)
            visited.push(node.value)
            if(node.right) traverse(node.right)
        }

        traverse(current)
        return visited
    }
}

const tree = new BinarySearchTree()

tree.insert(10)
tree.insert(6)
tree.insert(3)
tree.insert(8)
tree.insert(3)
tree.insert(8)
tree.insert(15)
tree.insert(20)


console.log(tree.BFS()) // [ 10, 6, 15, 3, 8, 20 ]
console.log(tree.DFSPreOrder()) //[ 10, 6, 3, 8, 15, 20 ]
console.log(tree.DFSPostOrder()) // [ 3, 8, 6, 20, 15, 10 ]
console.log(tree.DFSInOrder()) // [ 3, 6, 8, 10, 15, 20 ]
