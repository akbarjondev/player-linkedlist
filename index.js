const { LinkedList } = require('./LinkedList')

const ll = new LinkedList(['A', 'B', 'C'])

// ll.insert('1')
// ll.insert('2')

ll.from(['X', 'Y', 'Z'])

for(let d of ll) {
	console.log(d)
}