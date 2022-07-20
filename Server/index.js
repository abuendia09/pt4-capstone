const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const {
    getSongs,
    createSong,
    deleteSong,
} = require('./controller')

app.get(`/api/songs`, getSongs);
app.post(`/api/songs`, createSong);
app.delete(`/api/songs/:id`, deleteSong)


app.listen(4004, () => console.log("Server running on 4004"))