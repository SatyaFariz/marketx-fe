import { fetchQuery } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const query = graphql`
  query AdministrativeAreasSearchQuery($searchTerm: String!) {
    administrativeAreas(searchTerm: $searchTerm) {
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

class AdministrativeAreasSearch {
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

  load(searchTerm, cb) {
    this.waitingFor = searchTerm
    const cached = this.getCache(searchTerm)

    if(!searchTerm)
      return
    else if(cached) {
      cb(cached)
    } else {
      fetchQuery(this.environment, query, { searchTerm }).then(data => {
        const areas = data.administrativeAreas
        if(this.waitingFor === searchTerm)
          cb(areas)
        
        if(areas) {
          this.setCache(searchTerm, areas)
        }
      })
    }
  }
}

export default AdministrativeAreasSearch