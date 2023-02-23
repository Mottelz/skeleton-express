const express = require('express')
const app = express()
require('dotenv').config()
const port = 3000

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static('./static'))



app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})