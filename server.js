"use strict"
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Server del mio blog")
});


app.all('*', (req, res) => {
    res.status(404).send('<h1> ERROR 404, Not Found !</h1>');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}}`)
}) 