import { createPaginationContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import ProductItem from '../../Components/ProductItem'
import { useBottomScrollListener } from 'react-bottom-scroll-listener'
import { useState } from 'react'
import { CircularProgress, ButtonBase } from '@material-ui/core'
import Link from '../../Components/Link'
import Color from '../../Constants/Color'
import { SEARCH_NOT_FOUND_ILLUSTRATION_URL, EMPTY_ILLUSTRATION_URL } from '../../Constants'

const Component = props => {
  const { showsListingType, q, categoryId, search, me, locationId, category } = props
  const [errorLoadingMore, setErrorLoadingMore] = useState(false)
  const { edges } = search.search
  
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

  const scrollRef = useBottomScrollListener(onEndReached, { offset: 100 })

  const sellUrl = () => {
    if(me?.id) {
      if(me?.store?.id)
        return `/new/item/${categoryId}`
      
      return `/new/ad.account?redirect=/new/item/${categoryId}`
    }
    return `/login?redirect=/sell&categoryId=${categoryId}`
  }

  const renderCategoryBreadcrumbs = () => {
    if(category) {
      return (
        <div style={{
          // height: 48,
          marginBottom: 20,
          display: 'flex',
          alignItems: 'center'
        }}>
          {category.level > 1 ?
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            {category.ancestors.map((item, i) => {
              return (
                <div key={i} style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                  {i > 0 &&
                  <span style={{ margin: '0 5px' }}>{'/'}</span>
                  }
                  <ButtonBase key={item.id} href={`/c/${item.slug || item.id}`} component={Link}>
                    <span style={{ fontWeight: '700' }}>{item.name}</span>
                  </ButtonBase>
                </div>
              )
            })}
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <span style={{ margin: '0 5px' }}>{' / '}</span>
              <span style={{ fontWeight: '700' }}>{category.name}</span>
            </div>
          </div>
          :
          <span style={{
            fontSize: 24,
            fontWeight: '700',
            margin: 0
          }}>{category.name}</span>
          }
        </div>
      )
    }
    return null
  }

  if(edges.length === 0 && (q?.trim()?.length > 0 || locationId)) {
    return (
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {category &&
        <div style={{ padding: 15 }}>
          {renderCategoryBreadcrumbs()}
        </div>
        }
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1
        }}>
          <div>
            <img
              alt="Illustration not found"
              src={SEARCH_NOT_FOUND_ILLUSTRATION_URL}
              style={{
                width: 250,
                height: 250,
                marginBottom: 15
              }}
            />

            <p style={{ textAlign: 'center' }}>Oops... Tidak ditemukan 😱</p>
          </div>
        </div>
      </div>
    )
  } else if(edges.length === 0 && q?.trim()?.length === 0 && categoryId) {
    return (
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ padding: 15 }}>
          {renderCategoryBreadcrumbs()}
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}>
            <img
              alt="Illustration category empty"
              src={EMPTY_ILLUSTRATION_URL}
              style={{
                width: 250,
                height: 250,
                marginBottom: 15
              }}
            />

            <p style={{ textAlign: 'center', lineHeight: '20px' }}>
              {'Kategori ini masih kosong. Jadilah yang pertama '}
              <ButtonBase 
                style={{ 
                  color: Color.primary,
                  verticalAlign: 'baseline'
                }} 
                component={Link} 
                href={sellUrl()}
              >
                memasang iklan disini
              </ButtonBase>.
            </p>
          </div>
        </div>
      </div>
    )
  }

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
      }}
    >
      <div
        style={{
          paddingTop: category ? 15 : 20,
          paddingBottom: 20,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        {renderCategoryBreadcrumbs()}

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
                showsLocation
                me={null}
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
  me: graphql`
    fragment SearchResultsList_me on User {
      id,
      store {
        id
      }
    }
  `,
  search: graphql`
    fragment SearchResultsList_search on Query @argumentDefinitions(
      first: { type: "Int", defaultValue: 10 },
      after: { type: "String", defaultValue: null },
      q: { type: "String!" },
      categoryId: { type: "String" },
      locationId: { type: "Int" }
    ) {
      search(
        first: $first,
        after: $after,
        q: $q,
        categoryId: $categoryId,
        locationId: $locationId
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
    query SearchResultsListPaginationQuery($first: Int, $after: String, $q: String!, $categoryId: String, $locationId: Int) {      
      ...SearchResultsList_search @arguments(first: $first, after: $after, q: $q, categoryId: $categoryId, locationId: $locationId)        
    }
  `
})