import { fetchQuery } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const query = graphql`
  query EmailCheckerQuery($email: Email!) {
    emailExists(email: $email)
  }
`

var cache = {}

class EmailChecker {
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

  checkExistance(email, cb) {
    this.waitingFor = email
    const cached = this.getCache(email)

    if(email.trim() === '')
      return
    else if(cached) {
      cb(cached)
    } else {
      fetchQuery(this.environment, query, { email }).then(data => {
        const exists = data.emailExists
        if(this.waitingFor === email)
          cb({
            email: this.waitingFor,
            exists
          })
        
        if(exists) {
          this.setCache(email, {
            email,
            exists
          })
        }
      })
    }
  }
}

export default EmailChecker