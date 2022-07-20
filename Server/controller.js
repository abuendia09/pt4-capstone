const song = require('./db.json')
let globalId = 6

module.exports = {
    getSongs: (req, res) => res.status(200).send(song), 
    createSong: (req, res) => {
    let { title, artist, imageUrl, videoUrl } = req.body
    let newSong = {
        id: globalId,
        title, 
        artist,
        imageUrl,
        videoUrl
    }
    song.push(newSong)
    res.status(200).send(song)
    globalId++
    },
    deleteSong: (req, res) => {
        let index = song.findIndex(elem => elem.id === +req.params.id)
        song.splice(index, 1)
        res.status(200).send(song)
    },
}