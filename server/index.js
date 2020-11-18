const express = require("express")
const PORT = 3000

const app = express()

app.get('/', (req, res) => {
    res.send("<h1>Homepage</h1>")
})

app.listen(PORT, () => {
    console.log('Server started on port '+PORT)
})