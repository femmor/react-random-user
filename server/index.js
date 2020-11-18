const express = require("express")
const axios = require("axios")

const path = require('path');

// Import cors
// const cors = require('cors')

const PORT = 3000

// Initialize app
const app = express()

// Add cors to express middleware
// app.use(cors());

app.use(express.static(path.join(__dirname, '..', 'public')));

// Load the homepage
app.get('/', (req, res) => {
    res.send("<h1>Homepage</h1>")
})

// Get users from the API
app.get('/users', (req, res) => {
    axios.get('https://randomuser.me/api/?page=1&results=10')
    .then((response) => {
        res.send(response.data)
    })
})

// Listen to the app on the server
app.listen(PORT, () => {
    console.log('Server started on port '+PORT)
})