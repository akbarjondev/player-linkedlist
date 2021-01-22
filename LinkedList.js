class Node {

	data
	next
	prev

	constructor(data, next = null, prev = null) {
		this.data = data
		this.next = next
		this.prev = prev
	}
}


class LinkedList {

	head
	tail

	constructor() {
		this.head = null
		this.tail = null
	}

	insert(data) {

		const node = new Node(data)

		if(!this.head) {
			this.head = node
			this.tail = node

			this.head.next = this.tail
			this.head.prev = this.tail

			this.tail.next = this.head
			this.tail.prev = this.head
		} else {

		}

	}
}

module.exports.LinkedList = LinkedList
