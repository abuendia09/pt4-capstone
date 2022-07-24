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

app.use(express.static(path.join(__dirname, "/public")));

// app.get("/", function(req, res){
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// })
// app.get("/", function(req, res){
//     res.sendFile(path.join(__dirname, "../public/add.html"));
// })
// app.get("/styles", function(req, res){
//     res.sendFile(path.join(__dirname, "../public/index.css"));
// })
// app.get("/styles", function(req, res){
//     res.sendFile(path.join(__dirname, "../public/add.css"));
// })

app.get(`/api/songs`, getSongs);
app.post(`/api/songs`, createSong);
app.delete(`/api/songs/:id`, deleteSong);

const port = process.env.PORT || 4004

app.listen(port, () => console.log(`Server running on port ${port}`));