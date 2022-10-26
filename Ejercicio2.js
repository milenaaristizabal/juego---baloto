const express = require('express')
const app = express()
const port = 3002

app.get('/clientes', (req, res) => {
  res.send('BIENVENIDO :)')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})