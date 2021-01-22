const { IO } = require('./IO')
const { LinkedList } = require('./LinkedList')


class Player {

	playlist

	fromString(path) {
		const io = new IO(path)

		async function main() {
			const data = await io.read()
			
			if(Boolean(data)) {
				
				return data.split('\n').map(d => d.split(' #'))

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

		console.log(ll)
	}

}

module.exports.Player = Player
