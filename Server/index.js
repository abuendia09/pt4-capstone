const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

const {
    getSongs,
    createSong,
    deleteSong,
} = require('./controller');
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../index.html"));
})
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../add.html"));
})
app.get(`/api/songs`, getSongs);
app.post(`/api/songs`, createSong);
app.delete(`/api/songs/:id`, deleteSong);

const port = process.env.PORT || 4004

app.listen(port, () => console.log(`Server running on port ${port}`));