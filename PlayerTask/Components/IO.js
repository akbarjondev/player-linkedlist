const fs = require('fs')
const path = require('path')
const util = require('util')

class IO {

	path = undefined

	constructor(pathname) {
		this.pathname = path.resolve(pathname)
	}

	read() {
		const read = util.promisify(fs.readFile)
		return read(this.pathname, 'utf8')
	}

	write(data) {
		const write = util.promisify(fs.writeFile)
		return write(this.pathname, data)
	}
}

module.exports.IO = IO
