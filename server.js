const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const React = require('react')
const ReactDOMServer = require('react-dom/server')

import { createMemoryHistory as createHistory } from 'history'
import App  from './src/App'


const port = parseInt(process.env.PORT || 5000, 10)

app.disable('x-powered-by')

app.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(<App history={createHistory()}/>)
  const indexFile = path.resolve('./build/index.html')
  console.log('App', app)
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err)
      return res.status(500).send('Oops, better luck next time!')
    }
    console.log('Yo!!!', app)
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root" class="root">${app}</div>`)
    )
  })
})

app.use(express.static('build'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})