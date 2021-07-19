import { createPaginationContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import ProductItem from '../../Components/ProductItem'

const Component = props => {
  const { edges } = props.search.search
  return (
    <div style={{
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 20,
    }}>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridColumnGap: 20,
        gridRowGap: 15
      }}>
        {edges.map((edge, i) => {
          return (
            <ProductItem product={edge.node}/>
          )
        })}
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
    ) {
      search(
        first: $first,
        after: $after,
        q: $q
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
    query SearchResultsListPaginationQuery($first: Int, $after: String, $q: String!) {      
      ...SearchResultsList_search @arguments(first: $first, after: $after, q: $q)        
    }
  `
})