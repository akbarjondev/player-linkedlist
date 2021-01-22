const { IO } = require('./IO')


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
		
		console.log('START')
		this.playlist.forEach(song => {
			console.log(song[0])
			setTimeout(() => {

			}, )
		})
		console.log('END')
	}

}

module.exports.Player = Player
