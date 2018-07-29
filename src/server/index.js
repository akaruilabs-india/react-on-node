const express = require('express')
const os = require('os')

const port = process.env.APP_PORT || 3001
const app = express()

app.use(express.static('public'))

app.get('/api/username', (req, res) => {
  res.send({ username: os.userInfo().username })
})

app.listen(port, () => {
  console.log('app listening on', port) // eslint-disable-line
})
