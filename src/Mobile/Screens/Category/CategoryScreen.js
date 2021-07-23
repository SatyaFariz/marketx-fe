import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR } from '../../Constants'
import { IoChevronBackSharp, IoCloseSharp } from 'react-icons/io5'
import { LinearProgress } from '@material-ui/core'
import { QueryRenderer } from 'react-relay'
import useAppContext from '../../hooks/useAppContext'
import { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import SearchResultsList from '../Search/SearchResultsList'

const query = graphql`
  query CategoryScreenQuery($q: String!, $first: Int!, $categoryId: String!) {
    ...SearchResultsList_search @arguments(q: $q, first: $first, categoryId: $categoryId)
  }
`

const Component = props => {
  const { category } = props
  const { environment, history, queryParams } = useAppContext()
  const [searchTerm, setSearchTerm] = useState(queryParams.q || '')
  const [searchTermDebounced] = useDebounce(searchTerm, 500)

  useEffect(() => {
    history.replace(`/category/${category.id}?q=${searchTermDebounced}`)
  }, [searchTermDebounced])

  return (
    <div>
      <div style={{
        position: 'absolute',
        top: 0,
        width: '100%'
      }}>
        <div style={{
          height: HEADER_HEIGHT,
          backgroundColor: 'white',
          width: '100%',
          display: 'flex',
          // justifyContent: 'center',
          alignItems: 'center',
          
          borderBottom: `1px solid ${HEADER_BORDER_BOTTOM_COLOR}`
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
          height: 48,
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 15,
          paddingRight: 15
        }}>
          <span style={{
            fontSize: 18,
            fontWeight: '700'
          }}>{category.name}</span>
        </div>
      </div>

      <div style={{
        // marginTop: HEADER_HEIGHT + 48
      }}>
        <QueryRenderer
          environment={environment}
          variables={{ categoryId: category.id, q: queryParams.q || '', first: 24 }}
          query={query}
          render={({ error, props }) => {
            if(error) {
              console.log(error)
              return null
            } else if(props) {
              return (
                <SearchResultsList search={props} marginTop={HEADER_HEIGHT + 48}/>
              )
            }

            return <LinearProgress />
          }}
        />
      </div>
    </div>
  )
}

export default createFragmentContainer(Component, {
  category: graphql`
    fragment CategoryScreen_category on Category {
      id,
      name
    }
  `
})