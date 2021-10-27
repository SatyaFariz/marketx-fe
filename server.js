import dotenv from 'dotenv'
import express from 'express'
import path from 'path'
import fs from 'fs'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { resetServerContext } from 'react-beautiful-dnd'
import axios from 'axios'
import { createMemoryHistory as createHistory } from 'history'
import App  from './src/App'
import router from './src/Mobile/router'
import qs from 'query-string'
import routes from './src/Mobile/Screens'
import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime'

dotenv.config()
const app = express()

React.useLayoutEffect = React.useEffect // fix warning
const port = parseInt(process.env.PORT || 5000, 10)
const expressRouter = express.Router()
app.disable('x-powered-by')
resetServerContext()

routes.forEach(route => {
  (route.path === '/' ? app : expressRouter).get(route.path, async (req, res) => {
    const parts = req.url.split('?')
    const pathname = parts[0]
    const queryParams = parts[1] ? qs.parse(parts[1]) : {}
    const indexFile = path.resolve('./build/index.html')
    const page = await router.resolve({
      query: queryParams,
      pathname,
      fetchQuery: (query, variables) => {
        return new Promise(async (resolve) => {
          const res = await axios.post(process.env.REACT_APP_API_URL, 
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

    const createRelay = () => {
      const source = new RecordSource()
      const store = new Store(source)
      const network = Network.create(() => page.data)
      const environment = new Environment({
        network,
        store
      })
    
      return environment
    }
    
    const html = ReactDOMServer.renderToString(
      <App 
        history={createHistory()} 
        createRelay={createRelay}
        initialComponent={page.component}
        isMobile={true}
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
  if (!req.route) {
    return res.status(500).send('Oops, better luck next time!')
  }
  next()
})

app.use(express.static('build'))
app.use(express.static('server-build'))
app.use(expressRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})