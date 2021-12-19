import { fetchQuery } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const query = graphql`
  query AdministrativeAreasLoaderQuery($parentId: Int!) {
    administrativeAreas(parentId: $parentId) {
      administrativeAreaId,
      name
    }
  }
`

var cache = {}

class AdministrativeAreasLoader {
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

  load(parentId, cb) {
    this.waitingFor = parentId
    const cached = this.getCache(parentId)

    if(!parentId)
      return
    else if(cached) {
      cb(cached)
    } else {
      fetchQuery(this.environment, query, { parentId }).then(data => {
        const areas = data.administrativeAreas
        if(this.waitingFor === parentId)
          cb(areas)
        
        if(areas) {
          this.setCache(parentId, areas)
        }
      })
    }
  }
}

export default AdministrativeAreasLoader