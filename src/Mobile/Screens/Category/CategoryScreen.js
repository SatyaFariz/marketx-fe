import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_BORDER_BOTTOM_COLOR, LOGO_URL } from '../../Constants'
import Color from '../../Constants/Color'
import { IoCloseSharp, IoLocationOutline } from 'react-icons/io5'
import { LinearProgress, ButtonBase, IconButton, } from '@material-ui/core'
import { QueryRenderer } from 'react-relay'
import useAppContext from '../../hooks/useAppContext'
import { useState, useEffect, useRef } from 'react'
import { useDebounce } from 'use-debounce'
import SearchResultsList from '../Search/SearchResultsList'
import truncate from 'truncate'
import qs from 'query-string'
import AdministrativeAreaLoader from '../../../helpers/AdministrativeAreaLoader'
import LocationSearchModal from '../../Components/LocationSearchModal'

const query = graphql`
  query CategoryScreenQuery($q: String!, $first: Int!, $categoryId: String!, $locationId: Int) {
    ...SearchResultsList_search @arguments(q: $q, first: $first, categoryId: $categoryId, locationId: $locationId),
    me {
      ...SearchResultsList_me
    }
  }
`

const Component = props => {
  const isMounted = useRef(true)
  const { category, popularLocations } = props
  const { id } = category
  const { environment, history, queryParams, pathname } = useAppContext()
  const [searchTerm, setSearchTerm] = useState(queryParams.q || '')
  const [searchTermDebounced] = useDebounce(searchTerm, 500)
  const [locationText, setLocationText] = useState(null)
  const [selectLocation, setSelectLocation] = useState(false)
  const locationId = parseInt(queryParams?.locationId, 10)
  const [_locationId, setLocationId] = useState(isNaN(locationId) ? null : locationId)

  const locationLoader = useRef(new AdministrativeAreaLoader(environment))

  useEffect(() => {
    if(!isNaN(locationId) && !locationText) {
      locationLoader.current.load(locationId, location => {
        const ancestors = location?.ancestors?.slice()
        ancestors.reverse()
        const text = [location, ...ancestors].map(item => item.name).join(', ')
        isMounted.current && setLocationText(text)
      })
    }
  }, [locationId, locationText])

  useEffect(() => {
    history.replace(`/category/${id}?${qs.stringify({ ...queryParams, q: searchTermDebounced})}`)
  }, [searchTermDebounced, id, history])

  useEffect(() => {
    return () => isMounted.current = false
  }, [])

  useEffect(() => {
    if(pathname === `/category/${id}`) {
      setLocationId(isNaN(locationId) ? null : locationId)
    }
  }, [pathname, locationId])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}>
      <div style={{
        paddingRight: 15,
        paddingLeft: 15,
        paddingBottom: 5,
        backgroundColor: 'white',
        zIndex: 99,
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        borderBottom: `1px solid ${HEADER_BORDER_BOTTOM_COLOR}`
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 15,
          paddingBottom: 15
        }}>
          <img
            src={LOGO_URL}
            alt="app_logo"
            style={{
              height: 22,
              marginLeft: 5
            }}
          />

          <ButtonBase
            onClick={() => setSelectLocation(true)}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: 15 }}>{truncate(locationText || 'Pilih lokasi', 17)}</span>
              <IoLocationOutline size={18} style={{ marginLeft: 5 }}/>
            </div>
          </ButtonBase>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          flexGrow: 1
        }}>

          <div style={{
            height: 42,
            backgroundColor: '#f1f1f1',
            flexGrow: 1,
            display: 'flex',
            borderRadius: 6
          }}>
            <input
              placeholder="Cari..."
              style={{
                height: '100%',
                backgroundColor: 'transparent',
                paddingLeft: 10,
                flexGrow: 1,
                borderRadius: 8,
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
              onClick={() => setSearchTerm('')}
            >
              <IoCloseSharp size={24} color="black"/>
            </IconButton>
            }
          </div>
        </div>
      </div>

      <div style={{
        position: 'relative',
        flexGrow: 1
      }}>
        <QueryRenderer
          environment={environment}
          variables={{ 
            categoryId: category.id, q: searchTermDebounced || '', 
            first: 24,
            locationId: _locationId
          }}
          query={query}
          render={({ error, props }) => {
            if(error) {
              console.log(error)
              return null
            } else if(props) {
              return (
                <SearchResultsList 
                  search={props} 
                  me={props.me}
                  showsListingType={false}
                  q={searchTermDebounced}
                  categoryId={category.id}
                  locationId={_locationId}
                  category={category}
                />
              )
            }

            return (
              <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 99999999999
              }}>
                <LinearProgress />
              </div>
            )
          }}
        />
      </div>

      <div style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 99,
        display: selectLocation ? undefined : 'none'
      }}>
        <LocationSearchModal
          goBack={() => setSelectLocation(false)}
          setLocationText={setLocationText}
          popularLocations={popularLocations}
        />
      </div>
    </div>
  )
}

export default createFragmentContainer(Component, {
  category: graphql`
    fragment CategoryScreen_category on Category {
      id,
      name,
      level,
      ancestors {
        id,
        name
      }
    }
  `,
  popularLocations: graphql`
    fragment CategoryScreen_popularLocations on AdministrativeArea @relay(plural: true) {
      ...LocationSearchModal_popularLocations
    }
  `
})