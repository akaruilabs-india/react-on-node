const express = require('express')
const os = require('os')

const app = express()

app.use(express.static('dist'))

app.get('/api/username', (req, res) => res.send({ username: os.userInfo().username }))

const port = process.env.APP_PORT || 3001

app.listen(port, () => {
  console.log('app listening on', port) // eslint-disable-line
})
