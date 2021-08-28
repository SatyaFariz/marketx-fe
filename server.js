const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const React = require('react')
const ReactDOMServer = require('react-dom/server')

import { createMemoryHistory as createHistory } from 'history'
import App  from './src/App'
import router from './src/Mobile/router'


const port = parseInt(process.env.PORT || 5000, 10)
// app.use(express.static('build'))

app.disable('x-powered-by')

app.get('/', async (req, res) => {
  const app = ReactDOMServer.renderToString(<App history={createHistory()}/>)
  const indexFile = path.resolve('./build/index.html')
  console.log(req.url)
  // console.log('App', app)
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err)
      return res.status(500).send('Oops, better luck next time!')
    }
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root" class="root">${app}</div>`)
    )
  })

  // const rendered = React.render(<App history={createHistory()}/>)
  // const page = await router.resolve({
  //   pathname: req.url,
  //   // fetchQuery: (query, variables) => {
  //   //   return new Promise(async (resolve) => {
  //   //     resolve({})
  //   //   })
  //   // }
  //   fetchQuery: rendered.fetchQuery
  // })
  // console.log('Page', page)
  // // const html = ReactDOMServer.renderToString(page.component)
  // // const html = ReactDOMServer.renderToString(<App history={createHistory()}/>)
  // // return res.send(
  // //   data.replace('<div id="root"></div>', `<div id="root" class="root">${html}</div>`)
  // // )
})

// app.use('*', express.static(path.join(__dirname, 'build')))
app.use(express.static('build'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})