const { Player } = require('./Components/Player')

const player = new Player()

;(async function () {
	const playListArray = await player.fromString('./Data/song.data')
	player.setPlaylist(playListArray)
	player.play()
})()

