import EditAddressView from '../../Components/EditAddressView'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR, DIVIDER_COLOR } from '../../Constants'
import { TextField, Button, Fab } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { useState, useRef, useEffect } from 'react'
import useAppContext from '../../hooks/useAppContext'
import { IoChevronBackSharp } from 'react-icons/io5'
import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import SelectTypeAndCategoryView from '../../Components/SelectTypeAndCategoryView'

const Component = props => {
  const store = props.store
  const { categories } = props
  const { history, queryParams } = useAppContext()

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
        borderBottom: `1px solid ${HEADER_BORDER_BOTTOM_COLOR}`
      }}>
        <div 
        onClick={() => history.goBack()}
        style={{
          paddingRight: 10,
          paddingLeft: 10,
          zIndex: 1
        }}>
          <IoChevronBackSharp size={32}/>
        </div>
        
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
        bottom: 0
      }}>
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

            <Button
              disableElevation
              variant="contained"
              onClick={() => history.push(/*'/new/product'*/ '/edit/store')}
            >
              Edit
            </Button>
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

          <div>
            <span style={{
              color: 'rgb(83, 100, 113)',
              fontSize: 14,
              display: 'block',
              textAlign: 'center'
            }}>
              You still don't have products. Add one!
            </span>
          </div>
        </div>
        
      </div>

      <div style={{
        position: 'absolute',
        backgroundColor: 'white',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        display: queryParams.selectCategory === '1' ? undefined : 'none',
        zIndex: 9999
      }}>
        <SelectTypeAndCategoryView categories={categories}/>
      </div>

      <Fab color="primary" aria-label="add" style={{
        zIndex: 99,
        position: 'absolute',
        right: 15,
        bottom: 15
      }}
      onClick={() => history.push(/*'/new/product'*/ '/store?selectCategory=1')}
      >
        <Add />
      </Fab>
    </div>
  )
}

export default createFragmentContainer(Component, {
  store: graphql`
    fragment StoreScreen_store on Store {
      id,
      name,
      whatsappNumber,
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
      ...SelectTypeAndCategoryView_categories
    }
  `
})