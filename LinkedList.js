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
	#size = 0
	#array = []

	constructor(array) {
		this.head = null
		this.tail = null

		this.#array = [...this.#array, ...array] 
	}

	from(arr) {
		[...this.#array, ...arr].forEach(d => {
			this.insert(d)
		})

		return this
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

			let head = this.head // A
			let tail = this.tail // A

			this.tail = node // A -> B

			head.prev = node // A.prev = B
			tail.next = node // A.next = B

			this.tail.prev = tail // B.prev = A
			this.tail.next = head // B.next = A

		}
		
		this.#size++
	}

	[Symbol.iterator]() {
		let from = 0
		let to = this.#size

		let last = this.head.prev

		return {
			next: () => {

				last = last.next

				return {
					value: last.data,
					done: from++ >= to
				}

			}
		}
	}

}

module.exports.LinkedList = LinkedList
