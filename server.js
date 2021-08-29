global.window = global
const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const React = require('react')
const ReactDOMServer = require('react-dom/server')

import axios from 'axios'
import { createMemoryHistory as createHistory } from 'history'
import App  from './src/App'
import createRelay from './src/Mobile/createRelay'
import router from './src/Mobile/router'
import qs from 'query-string'
import routes from './src/Mobile/Screens'
React.useLayoutEffect = React.useEffect // fix warning
const port = parseInt(process.env.PORT || 5000, 10)
const expressRouter = express.Router()
app.disable('x-powered-by')

routes.forEach(route => {
  expressRouter.get(route.path, async (req, res) => {
    const parts = req.url.split('?')
    const pathname = parts[0]
    const queryParams = parts[1] ? qs.parse(parts[1]) : {}
    const indexFile = path.resolve('./build/index.html')
    const page = await router.resolve({
      query: queryParams,
      pathname,
      fetchQuery: (query, variables) => {
        return new Promise(async (resolve) => {
          const res = await axios.post("http://192.168.1.74:4000/graphql", 
            {
              query: query.params.text,
              variables
            }, 
            {
              headers: {}
            }
          )
          resolve(res.data.data)
        })
      }
    })
    
    const html = ReactDOMServer.renderToString(
      <App 
        history={createHistory()} 
        createRelay={createRelay} 
        initialData={page.data}
        initialComponent={page.component}
      />
    )
    
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err)
        return res.status(500).send('Oops, better luck next time!')
      }
      return res.send(
        data.replace('<div id="root"></div>', `<div id="root" class="root">${html}</div>`)
      )
    })
  })
})

expressRouter.use((req, res, next) => {
  if (!req.route)
    return res.status(500).send('Oops, better luck next time!')
  next()
})

// app.use('*', express.static(path.join(__dirname, 'build')))
app.use(express.static('build'))
app.use(express.static('src'))
app.use(expressRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})