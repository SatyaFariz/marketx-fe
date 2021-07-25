import { fetchQuery, graphql } from 'react-relay'

const query = graphql`
  query MobileNumberCheckerQuery($mobileNumber: String!) {
    mobileNumberExists(mobileNumber: $mobileNumber)
  }
`

var cache = {}

class MobileNumberChecker {
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

  checkExistance(mobileNumber, cb) {
    this.waitingFor = mobileNumber
    const cached = this.getCache(mobileNumber)

    if(mobileNumber.trim() === '')
      return
    else if(cached) {
      cb(cached)
    } else {
      fetchQuery(this.environment, query, { mobileNumber }).toPromise().then(data => {
        const exists = data.mobileNumberExists
        if(this.waitingFor === mobileNumber)
          cb({
            mobileNumber: this.waitingFor,
            exists
          })
        
        if(exists) {
          this.setCache(mobileNumber, {
            mobileNumber,
            exists
          })
        }
      })
    }
  }
}

export default MobileNumberChecker