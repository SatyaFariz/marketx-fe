import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR } from '../../Constants'
import Color from '../../Constants/Color'
import { IoCloseSharp } from 'react-icons/io5'
import { LinearProgress, IconButton } from '@material-ui/core'
import graphql from 'babel-plugin-relay/macro'
import { QueryRenderer } from 'react-relay'
import useAppContext from '../../hooks/useAppContext'
import SearchResultsList from './SearchResultsList'
import { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import BackButton from '../../Components/BackButton'

const query = graphql`
  query SearchScreenQuery($q: String!, $first: Int!) {
    ...SearchResultsList_search @arguments(q: $q, first: $first),
    me {
      ...SearchResultsList_me
    }
  }
`

const Component = props => {
  const { environment, history, queryParams } = useAppContext()
  const [searchTerm, setSearchTerm] = useState(queryParams.q || '')
  const [searchTermDebounced] = useDebounce(searchTerm, 500)

  useEffect(() => {
    history.replace(`/search?q=${searchTermDebounced}`)
  }, [searchTermDebounced, history])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
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
        <BackButton/>

        <div style={{
          height: 42,
          backgroundColor: '#f1f1f1',
          flexGrow: 1,
          marginRight: 15,
          display: 'flex',
          borderRadius: 6
        }}>
          <input
            placeholder="Cari barang atau jasa apa?"
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
        position: 'relative',
        flexGrow: 1
      }}>
        <QueryRenderer
          environment={environment}
          variables={{ q: searchTermDebounced || '', first: 24 }}
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
                  q={searchTermDebounced}
                />
              )
            }

            return <LinearProgress />
          }}
        />
      </div>
    </div>
  )
}

export default Component