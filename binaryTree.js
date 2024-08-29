// testestsetsets
//checkout
//checkout
class nod {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class Tree {
    constructor() {
        this.root = null
    }
    insert(value) {
        let newnode = new node(value)
        if (this.root === null) {
            this.root = newnode
            return this
        }
        let current = this.root
        while (true) {
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newnode
                    return this
                } else {
                    current = current.left
                }
            } else {
                if (current.right === null) {
                    current.right = newnode
                    return this
                } else {
                    current = current.right
                }

            }

        }
    }
}
let myTree = new Tree()
myTree.insert(10)
myTree.insert(20)
myTree.insert(30)
console.log(myTree.root.right.value)