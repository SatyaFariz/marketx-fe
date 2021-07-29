import EditAddressView from '../../Components/EditAddressView'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR, DIVIDER_COLOR } from '../../Constants'
import { TextField, Button } from '@material-ui/core'
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

  if(store?.address) {
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
          }}>{store.name}</h1>
        </div>
      </div>

      <div style={{
        top: HEADER_HEIGHT,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
      }}>
        <Button
          onClick={() => history.push(/*'/new/product'*/ '/store?selectCategory=1')}
        >
          Add a product

        </Button>
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
    </div>
  )
}

export default createFragmentContainer(Component, {
  store: graphql`
    fragment StoreScreen_store on Store {
      id,
      name,
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