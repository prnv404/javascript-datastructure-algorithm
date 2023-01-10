
/* A binary search tree (BST) is a type of binary tree that is often used to store data that
 can be compared and ordered. The structure of a BST allows for efficient search, insertion,
  and deletion operations.

In a BST, every node has a key that is greater than all the keys in its left subtree and less
 than all the keys in its right subtree. This property is known as the BST invariant. 
 By enforcing the BST invariant, the tree is able to maintain a sorted order of its keys,
  which allows for the efficient search of specific keys.

Binary search trees are commonly used to implement data structures such as sets, maps, 
and dictionaries. They are also used in algorithms for tasks such as sorting and searching. */



class Node{
    constructor(value) {
        this.value = value
        this.right = null
        this.left  = null
     }
}
 
class BinarySearchTree{
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
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(9)
// tree.insert()
tree.insert(7)
tree.insert(12)
tree.insert(11)
tree.insert(8)

console.log(tree.find(10))
// tree.insert(11)

// console.log(tree.right)