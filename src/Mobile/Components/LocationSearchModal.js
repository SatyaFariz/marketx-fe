import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR } from '../Constants'
import Color from '../Constants/Color'
import { IoCloseSharp } from 'react-icons/io5'
import { createFragmentContainer } from 'react-relay'
import { IconButton, List, ListItem, ListItemText, ButtonBase } from '@material-ui/core'
import graphql from 'babel-plugin-relay/macro'
import useAppContext from '../hooks/useAppContext'
import { useState, useEffect, useRef } from 'react'
import { useDebounce } from 'use-debounce'
import BackButton from './BackButton'
import qs from 'query-string'
import AdministrativeAreasSearch from '../../helpers/AdministrativeAreasSearch'

const Component = props => {
  const isMounted = useRef(true)
  const { popularLocations, setLocationText, goBack, isVisible } = props 
  const { environment, history, queryParams } = useAppContext()
  const [searchTerm, setSearchTerm] = useState('')
  const [searchTermDebounced] = useDebounce(searchTerm.trim(), 500)
  const [locations, setLocations] = useState([])

  const locationSearch = useRef(new AdministrativeAreasSearch(environment))

  const setLocation = (locationId, text) => {
    const { pathname } = window.location
    const params = { ...queryParams, locationId }
    delete params.action
    history.replace(`${pathname}?${qs.stringify(params)}`)
    goBack()
    setLocationText(text)
  }

  const removeFilter = () => {
    const { pathname } = window.location
    const params = { ...queryParams }
    delete params.locationId
    history.replace(`${pathname}?${qs.stringify(params)}`)
    goBack()
    setLocationText(null)
  }

  useEffect(() => {
    if(searchTermDebounced.length >= 3) {
      locationSearch.current.load(searchTermDebounced, locations => {
        isMounted.current && setLocations(locations)
      })
    } else {
      setLocations([])
    }
  }, [searchTermDebounced])

  useEffect(() => {
    return () => {
      isMounted.current = false
      document.documentElement.style = undefined
    }
  }, [])

  useEffect(() => {
    if(isVisible) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style = undefined
    }
  }, [isVisible])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflow: 'auto',
      overscrollBehavior: 'contain',
      backgroundColor: 'white'
    }}>
      <div style={{
        height: HEADER_HEIGHT,
        backgroundColor: 'white',
        width: '100%',
        display: 'flex',
        zIndex: 99,
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        borderBottom: `1px solid ${HEADER_BORDER_BOTTOM_COLOR}`
      }}>
        <BackButton onClick={goBack}/>

        <div style={{
          height: 42,
          backgroundColor: '#f1f1f1',
          flexGrow: 1,
          marginRight: 15,
          display: 'flex',
          borderRadius: 6
        }}>
          <input
            placeholder="Cari lokasi..."
            style={{
              height: '100%',
              backgroundColor: 'transparent',
              // paddingRight: 10,
              paddingLeft: 10,
              flexGrow: 1,
              borderRadius: 8,
            //  lineHeight: 24,
              border: 'none',
              outline: 'none',
              fontSize: 16,
              caretColor: Color.primary
            }}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          {searchTerm.length > 0 &&
          <IconButton 
          onClick={() => setSearchTerm('')}>
            <IoCloseSharp color="black" size={24}/>
          </IconButton>
          }
        </div>
      </div>

      <div style={{
        backgroundColor: 'white',
        flexGrow: 1,
        overflow: 'auto',
        overscrollBehavior: 'contain',
      }}>
        {queryParams?.locationId &&
        <div>
          <ButtonBase
            onClick={removeFilter}
            style={{
              marginLeft: 15,
              marginTop: 15,
              color: Color.primary,
              fontSize: 15
            }}
          >
            <span>Hapus filter lokasi</span>
          </ButtonBase>
        </div>
        }
        <List>
          {(searchTermDebounced.length < 3 ? popularLocations : locations).map(location => {
            const ancestors = location.ancestors.slice()
            ancestors.reverse()
            const text = [location, ...ancestors].map(item => item.name).join(', ')
            return (
              <ListItem
                button
                onClick={() => setLocation(location.administrativeAreaId, text)}
                key={location.administrativeAreaId}
              >
                <ListItemText primary={text} />
              </ListItem>
            )
          })}
        </List>
      </div>
    </div>
  )
}

export default createFragmentContainer(Component, {
  popularLocations: graphql`
    fragment LocationSearchModal_popularLocations on AdministrativeArea @relay(plural: true) {
      administrativeAreaId,
      name, 
      ancestors {
        administrativeAreaId,
        name
      }
    }
  `
})