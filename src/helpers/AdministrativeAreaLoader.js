import { fetchQuery } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const query = graphql`
  query AdministrativeAreaLoaderQuery($id: Int!) {
    administrativeArea(id: $id) {
      administrativeAreaId,
      name,
      ancestors {
        administrativeAreaId,
        name
      }
    }
  }
`

var cache = {}

class AdministrativeAreaLoader {
  constructor(environment) {
    this.environment = environment
    this.waitingFor = null
  }

  setCache(key, val) {
    cache[key] = val
  }

  getCache(key) {
    return cache[key]
  }

  load(id, cb) {
    this.waitingFor = id
    const cached = this.getCache(id)

    if(!id)
      return
    else if(cached) {
      cb(cached)
    } else {
      fetchQuery(this.environment, query, { id }).then(data => {
        const area = data.administrativeArea
        if(this.waitingFor === id)
          cb(area)
        
        if(area) {
          this.setCache(id, area)
        }
      })
    }
  }
}

export default AdministrativeAreaLoader