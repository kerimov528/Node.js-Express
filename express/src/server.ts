const express = require('express')
const app = express()

app.get('/', async (req, res) => {
    console.log('Server Work...')
    res.end()
})

app.listen(5000, () => {
    console.log('server listen on port 5000...')
})