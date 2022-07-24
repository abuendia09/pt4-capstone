const addSongButton = document.getElementById("addSongBtn");

const errCallback = err => console.log(err);

const createSong = body => {
    axios.post(`/api/songs`, body)
    .then(() => {
        window.location.href = "index.html"
    }) 
    .catch(errCallback)
}
function submitHandler(e) {
    console.log("hitting it");
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

addSongButton.addEventListener('click', submitHandler)