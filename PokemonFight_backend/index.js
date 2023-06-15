const express = require('express')
const app = require("./app")
var cors = require('cors')


const port = 5000
app.use(cors())


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})