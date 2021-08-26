const express = require('express')
const path = require('path')
const app = express()
const port = parseInt(process.env.PORT, 10)

app.use(express.static('build'))

app.disable('x-powered-by')
app.use('*', express.static(path.join(__dirname, 'build')))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})