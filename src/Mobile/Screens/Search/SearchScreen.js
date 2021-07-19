import { HEADER_HEIGHT } from '../../Constants'
import { IoChevronBackSharp, IoCloseSharp } from 'react-icons/io5'
import { LinearProgress } from '@material-ui/core'
import graphql from 'babel-plugin-relay/macro'
import { QueryRenderer } from 'react-relay'
import useAppContext from '../../hooks/useAppContext'
import SearchResultsList from './SearchResultsList'
import { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'

const query = graphql`
  query SearchScreenQuery($q: String!, $first: Int!) {
    ...SearchResultsList_search @arguments(q: $q, first: $first)
  }
`

const Component = props => {
  const { environment, history, queryParams } = useAppContext()
  const [searchTerm, setSearchTerm] = useState(queryParams.q || '')
  const [searchTermDebounced] = useDebounce(searchTerm, 500)

  useEffect(() => {
    history.replace(`/search?q=${searchTermDebounced}`)
  }, [searchTermDebounced])

  return (
    <div>
      <div style={{
        height: HEADER_HEIGHT,
        backgroundColor: 'white',
        width: '100%',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0
      }}>
        <div 
        onClick={() => history.goBack()}
        style={{
          paddingRight: 10,
          paddingLeft: 10
        }}>
          <IoChevronBackSharp size={32}/>
        </div>

        <div style={{
          height: 42,
          backgroundColor: '#f1f1f1',
          flexGrow: 1,
          marginRight: 15,
          display: 'flex',
          borderRadius: 6
        }}>
          <input
            placeholder="What do you want to rent today?"
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
              caretColor: '#FF385C'
            }}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          {searchTerm.length > 0 &&
          <div 
          onClick={() => setSearchTerm('')}
          style={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 10,
            paddingRight: 10,
            display: 'flex'
          }}>
            <IoCloseSharp size={24}/>
          </div>
          }
        </div>
      </div>

      <div style={{
        marginTop: HEADER_HEIGHT
      }}>
        <QueryRenderer
          environment={environment}
          variables={{ q: queryParams.q || '', first: 24 }}
          query={query}
          render={({ error, props }) => {
            if(error) {
              console.log(error)
              return null
            } else if(props) {
              return (
                <SearchResultsList search={props}/>
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