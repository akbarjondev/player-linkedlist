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

	play() {
		const ll = new LinkedList(this.playlist)

		let tail = ll.head


		setInterval(() => {
		
			let [ songName, duration ] = tail.data.split(' #')
		
			console.log(songName)
		
			tail = tail.next
		
		}, Number(2) * 1000)
	}

}

module.exports.Player = Player
