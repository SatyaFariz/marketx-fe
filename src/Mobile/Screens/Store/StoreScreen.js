import EditAddressView from '../../Components/EditAddressView'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR, DIVIDER_COLOR } from '../../Constants'
import { Button, Fab } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { useState, useRef, useEffect } from 'react'
import useAppContext from '../../hooks/useAppContext'
import graphql from 'babel-plugin-relay/macro'
import SelectCategoryView from './SelectCategoryView'
import { useBottomScrollListener } from 'react-bottom-scroll-listener'
import { createPaginationContainer } from 'react-relay'
import ProductItem from '../../Components/ProductItem'
import { CircularProgress } from '@material-ui/core'
import BackButton from '../../Components/BackButton'

const Component = props => {
  const { categories, me, store, products } = props
  const { edges } = products.search
  const { history, queryParams, pathname } = useAppContext()
  const { selectCategory } = queryParams
  const [errorLoadingMore, setErrorLoadingMore] = useState(false)
  const [showCategory, setShowCategory] = useState(selectCategory === '1')

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

  useEffect(() => {
    if(pathname.split('/')[1] === 'store') {
      setShowCategory(selectCategory === '1')
    }
  }, [selectCategory, pathname])

  if(!store?.address) {
    return (
      <EditAddressView store={store}/>
    )
  } 

  return (
    <div style={{
      height: '100%'
    }}>
      <div style={{
        height: HEADER_HEIGHT,
        backgroundColor: 'white',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        zIndex: 9999,
        borderBottom: `1px solid ${HEADER_BORDER_BOTTOM_COLOR}`
      }}>
        <BackButton/>
        
        <div style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 0
        }}>
          <h1 style={{
            margin: 0,
            fontSize: 20,
            fontWeight: 500,
            textAlign: 'center',
          }}>Store</h1>
        </div>
      </div>

      <div style={{
        top: HEADER_HEIGHT,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'auto'
      }}
        ref={scrollRef}
      >
        <div style={{
          maxHeight: 200,
          backgroundColor: store?.banner ? undefined : 'rgb(207, 217, 222)',
          width: '100%',
          height: 127,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundImage: store?.banner ? `url("${store?.banner.url}")` : undefined
        }}
        />
        <div style={{
          paddingLeft: 15,
          paddingRight: 15,
          paddingBottom: 20
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row'
          }}>
            <div style={{
              height: 94,
              width: 94,
              backgroundColor: store?.profilePicture ? undefined : '#b1b6c9',
              marginTop: -42,
              borderRadius: '50%',
              borderWidth: 2,
              borderColor: 'white',
              borderStyle: 'solid',
              marginBottom: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundImage: store?.profilePicture ? `url("${store?.profilePicture.url}")` : undefined
            }}>
              {!store.profilePicture &&
              <span style={{ color: 'white', fontSize: 24 }}>{store.name[0].toUpperCase()}</span>
              }
            </div>

            {store.merchantId === me?.id &&
            <Button
              disableElevation
              variant="contained"
              onClick={() => history.push(/*'/new/product'*/ '/edit/store')}
            >
              Edit
            </Button>
            }
          </div>

          <h3 style={{ fontSize: 20, marginTop: 10, marginBottom: 5 }}>{store.name}</h3>
          
          <span style={{
            color: 'rgb(83, 100, 113)',
            fontSize: 14,
            display: 'block'
          }}>{store.whatsappNumber}</span>

          <span style={{
            display: 'block',
            marginTop: 15,
            fontSize: 14
          }}>{store.address.fullAddress}</span>

          <div style={{
            height: 1,
            backgroundColor: DIVIDER_COLOR,
            margin: '15px 0'
          }}/>

          {edges.length === 0 ?
          <div>
            <span style={{
              color: 'rgb(83, 100, 113)',
              fontSize: 14,
              display: 'block',
              textAlign: 'center'
            }}>
              {store.merchantId === me?.id ? "You still don't have products. Add one!" : "This store doesn't have products yet."}
            </span>
          </div>
          :
          <div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridColumnGap: 15,
              gridRowGap: 20
            }}>
              {edges.map((edge, i) => {
                return (
                  <ProductItem product={edge.node}/>
                )
              })}
            </div>
            
            <div 
              style={{ 
                paddingTop: 20,
                display: 'flex',
                justifyContent: 'center'
            }}>
              <div style={{ visibility: !props.relay.hasMore() ? 'hidden' : undefined }}>
                <CircularProgress />
              </div>
            </div>
          </div>
          }
        </div>
        
      </div>

      <div style={{
        position: 'absolute',
        backgroundColor: 'white',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        display: showCategory ? undefined : 'none',
        zIndex: 9999
      }}>
        <SelectCategoryView categories={categories}/>
      </div>

      <Fab color="primary" aria-label="add" style={{
        zIndex: 99,
        position: 'absolute',
        right: 15,
        bottom: 15
      }}
      onClick={() => history.push(/*'/new/product'*/ `/store/${store.id}?selectCategory=1`)}
      >
        <Add />
      </Fab>
    </div>
  )
}

export default createPaginationContainer(Component, {
  me: graphql`
    fragment StoreScreen_me on User {
      id
    }
  `,
  store: graphql`
    fragment StoreScreen_store on Store {
      id,
      name,
      whatsappNumber,
      merchantId,
      profilePicture {
        id,
        url
      },
      banner {
        id,
        url
      },
      address {
        fullAddress
      }
      ...EditAddressView_store
    }
  `,
  categories: graphql`
    fragment StoreScreen_categories on Category @relay(plural: true) {
      id,
      ...SelectCategoryView_categories
    }
  `,
  products: graphql`
    fragment StoreScreen_products on Query @argumentDefinitions(
      first: { type: "Int", defaultValue: 10 },
      after: { type: "String", defaultValue: null },
      q: { type: "String!", defaultValue: "" },
      storeId: { type: "String!" }
    ) {
      search(
        first: $first,
        after: $after,
        q: $q,
        storeId: $storeId
      ) @connection(key: "StoreScreen_search", filters: []){
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
    const { products } = props
    return products && products.search
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
    query StoreScreenPaginationQuery($first: Int, $after: String, $q: String!, $storeId: String!) {      
      ...StoreScreen_products @arguments(first: $first, after: $after, q: $q, storeId: $storeId)        
    }
  `
})