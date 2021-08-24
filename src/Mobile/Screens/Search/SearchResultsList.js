import { createPaginationContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import ProductItem from '../../Components/ProductItem'
import { useBottomScrollListener } from 'react-bottom-scroll-listener'
import { useState } from 'react'
import { CircularProgress } from '@material-ui/core'

const Component = props => {
  const { showsListingType } = props
  const [errorLoadingMore, setErrorLoadingMore] = useState(false)
  const { edges } = props.search.search
  
  const loadMore = () => {
    const { relay } = props
    if(!relay.hasMore())
      return
    else if(relay.isLoading())
      return
    
    relay.loadMore(null, err => {
      if(err)
        setErrorLoadingMore(true)
    })

    setErrorLoadingMore(false)
  }

  const onEndReached = () => !errorLoadingMore && loadMore()

  const scrollRef = useBottomScrollListener(onEndReached)

  return (
    <div 
    ref={scrollRef}
    style={{
      overflow: 'auto',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
    }}>
      <div
      style={{
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
      }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridColumnGap: 20,
          gridRowGap: 15,
          alignItems: 'start'
        }}>
          {edges.map((edge, i) => {
            return (
              <ProductItem
                key={edge.node.id}
                product={edge.node}
                showsListingType={showsListingType}
              />
            )
          })}
        </div>

        {props.relay.hasMore() &&
          <div 
            style={{ 
              paddingTop: 20,
              display: 'flex',
              justifyContent: 'center'
          }}>
            <CircularProgress />
          </div>
        }
      </div>
    </div>
  )
}

export default createPaginationContainer(Component, {
  search: graphql`
    fragment SearchResultsList_search on Query @argumentDefinitions(
      first: { type: "Int", defaultValue: 10 },
      after: { type: "String", defaultValue: null },
      q: { type: "String!" },
      categoryId: { type: "String" }
    ) {
      search(
        first: $first,
        after: $after,
        q: $q,
        categoryId: $categoryId
      ) @connection(key: "SearchResultsList_search", filters: []){
        edges {
          cursor,
          node {
            id,
            ...ProductItem_product
          }
        },
        pageInfo {
          hasNextPage,
          endCursor
        }
      }
    }
  `
}, {
  direction: 'forward',
  getConnectionFromProps(props) {
    const { search } = props
    return search && search.search
  },
  getFragmentVariables(prevVars, totalCount) {
    return {
      ...prevVars,
      count: totalCount
    }
  },
  getVariables(_, { cursor }, fragmentVariables) {
    return {
      ...fragmentVariables,
      after: cursor
    }
  },
  query: graphql`
    query SearchResultsListPaginationQuery($first: Int, $after: String, $q: String!, $categoryId: String) {      
      ...SearchResultsList_search @arguments(first: $first, after: $after, q: $q, categoryId: $categoryId)        
    }
  `
})