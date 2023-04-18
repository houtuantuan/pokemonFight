const express = require('express')
const app = express()
let jsonData = require("./file.json")
const router=require("./routers/allPokemon")
var cors = require('cors')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.use("/pokemon",router);

// app.use("/score",router);

module.exports =app;