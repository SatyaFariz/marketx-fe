import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime'
import { SubscriptionClient } from 'subscriptions-transport-ws'

// const {  REACT_APP_SUBSCRIPTION_URL } = process.env

export default function createRelay() {
  function fetchQuery(
    operation,
    variables,
    cacheConfig,
    uploadables,
  ) {
    
    const method = 'POST'
    const credentials = 'include'
    const API_KEY = 'Basic d2suRDNBPkt3ezdUUkxFazROVHhudDdTOllrbTpTWWIjeTtHa2MuXlBwVFJbbWg='
    let request

    if(uploadables) {
      if(!window.FormData) throw new Error('Uploading files without `FormData` not supported.')

      const formData = new FormData()
      formData.append('query', operation.text)
      formData.append('variables', JSON.stringify(variables))

      for(const uploadable in uploadables) {
        if(Object.prototype.hasOwnProperty.call(uploadables, uploadable))
          formData.append(uploadable, uploadables[uploadable])
      }

      request = {
        method: method,
        credentials: credentials,
        body: formData,
        headers: {
          'Authorization': API_KEY
        }
      }

    } else {
      request = {
        method: method,
        credentials: credentials,
        headers: {
          'content-type': 'application/json',
          'Authorization': API_KEY
        },
        body: JSON.stringify({
          query: operation.text,
          variables
        })
      }
    }
    

    
    return fetch('/graphql', request).then(response => {
      return response.json()
    })
    
  }

  function setupSubscription(
    config,
    variables,
    cacheConfig,
    observer
  ) {
    // const subscriptionsEndpoint = REACT_APP_SUBSCRIPTION_URL
    const subscriptionsEndpoint = 'ws://tuan-rumah.herokuapp.com/subscriptions'
    let query = config.text
    let { onNext, onError, onCompleted } = observer
    let subscriptionClient = new SubscriptionClient(subscriptionsEndpoint, { reconnect: true })
    subscriptionClient.request({ query, variables }).subscribe(onNext, onError, onCompleted)
  }

  const source = new RecordSource(window.records)
  const store = new Store(source)
  const network = Network.create(fetchQuery, setupSubscription) // see note below
  const handlerProvider = null

  const environment = new Environment({
    handlerProvider, // Can omit.
    network,
    store,
  })

  return environment
}