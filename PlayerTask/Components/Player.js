const { IO } = require('./IO')
const { LinkedList } = require('./LinkedList')


class Player {

	playlist

	fromString(path) {
		const io = new IO(path)

		async function main() {
			const data = await io.read()
			
			if(Boolean(data)) {
				
				return data.split('\n')

			} else {
				return false
			}
		}

		return main()
	}

	setPlaylist(array) {
		this.playlist = array
	}

	sleep(delay) {
		let start = new Date().getTime()
		while(new Date().getTime() < start + (Number(delay) * 1000));
	}

	play() {
		const ll = new LinkedList(this.playlist)

		let tail = ll.head
		let count = 0, songName, duration

		console.log('START')

		while(count < ll.getSize ) {

			[ songName, duration ] = tail.data.split(' #')

			console.log(songName + ' -> ' + duration)

			tail = tail.next
			
			this.sleep(duration)
			
			count++
		}

		console.log('END')
	}
}

module.exports.Player = Player
