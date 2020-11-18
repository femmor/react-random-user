const express = require("express")
const axios = require("axios")
const PORT = 3000

const app = express()

app.get('/', (req, res) => {
    res.send("<h1>Homepage</h1>")
})

app.get('/users', (req, res) => {
    axios.get('https://randomuser.me/api/?page=1&results=10')
    .then((response) => {
        res.send(response.data)
    })
})

app.listen(PORT, () => {
    console.log('Server started on port '+PORT)
})