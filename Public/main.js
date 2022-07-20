const songsContainer = document.querySelector('#songs-container')
const form = document.querySelector('form')

const songsCallback = ({ data }) => displaySongs(data);
const errCallback = err => console.log(err.response.data);

const getSongs = () => axios.get(`http://localhost:4004/api/songs`).then(songsCallback).catch(errCallback);
const createSong = body => axios.post(`http://localhost:4004/api/songs`, body).then(songsCallback).catch(errCallback)
const deleteSong = id => axios.delete(`http://localhost:4004/api/songs/:${id}`).then(songsCallback).catch(errCallback)


function submitHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let artist = document.querySelector('#artist')
    let imageURL = document.querySelector('#image')
    let videoURL = document.querySelector('#video')

    let bodyObj = {
        title: title.value,
        artist: artist.value, 
        imageUrl: imageURL.value,
        videoUrl: videoURL.value
    }

    createSong(bodyObj)

    title.value = ''
    artist.value = ''
    imageURL.value = ''
    videoURL.value = ''

}
function createSongCard(song) {
    const songCard = document.createElement('div')
    songCard.classList.add('song')

    songCard.innerHTML = `<main id="main">
    <div class="song">
    <img src=${song.imageUrl}>
    <div class="song-info">
        <h3>${song.title}</h3>
        <h3>${song.artist}</h3>
    </div>
    <div class="video-link">
        <p> 
            <a href=${song.videoUrl} target="_blank">Click here to watch the video</a>
        </p>
    </div>
    <button onclick="deleteSong(${song.id})">delete</button>
    `
    songsContainer.appendChild(songCard)
}

function displaySongs(arr) {
    console.log(arr);
    songsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createSongCard(arr[i])
    }
}
getSongs()