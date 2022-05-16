
const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"));

app.get('/', (req, res) => {
    console.log("got request to ", req.url);
    res.sendFile('index.html', {root: "./public/"});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
