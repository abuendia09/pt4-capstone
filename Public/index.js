const main = document.querySelector('#main')

const songsCallback = ({ data }) => displaySongs(data);
const errCallback = err => console.log(err);

const getSongs = () => axios.get(`http://localhost:4004/api/songs`).then(songsCallback).catch(errCallback);
const deleteSong = id => axios.delete(`http://localhost:4004/api/songs/:${id}`).then(songsCallback).catch(errCallback)


function createSongCard(song) {
    const songCard = document.createElement('div')
    songCard.classList.add('song')

    songCard.innerHTML = ` 
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
    main.appendChild(songCard)
}

function displaySongs(arr) {
    console.log(arr);
    main.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createSongCard(arr[i])
    }
}

getSongs()