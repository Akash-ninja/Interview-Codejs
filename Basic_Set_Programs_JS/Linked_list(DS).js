class Node {
    constructor(data, next = null) {
        this.data = data,
        this.next = next
    }
}

class LinkedList {
    constructor(head) {
        this.head = null
    }
}

// A list object is created with a property head, currently pointing at null
let list = new LinkedList()

LinkedList.prototype.insertAtBeginning = function(data) {

    let newNode = new Node(data)  // A newNode object is created with property data and next = null
    newNode.next = this.head      // The pointer next is assigned head pointer so that both pointers now point at the same node.
    this.head = newNode           // As we are inserting at the beginning the head pointer needs to now point at the newNode. 

    return this.head
}

LinkedList.prototype.insertAtEnd = function(data) {

    let newNode = new Node(data)
    
    // If the head is null
    if(!this.head) {
        this.head = newNode
        return this.head
    }

    let tail = this.head
    while(tail.next !== null) {
        tail = tail.next
    }
    tail.next = newNode

    return newNode
}


LinkedList.prototype.insertAt() = function(data, index) {

    if(!this.head) {
        this.head = new Node(data)
        return
    }

    if(index == 0) {
        list.insertAtBeginning(data)
    }

}

