import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR, DIVIDER_COLOR } from '../../Constants'
import Color from '../../Constants/Color'
import { IoCloseSharp } from 'react-icons/io5'
import { LinearProgress, ButtonBase, IconButton } from '@material-ui/core'
import { QueryRenderer } from 'react-relay'
import useAppContext from '../../hooks/useAppContext'
import { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import SearchResultsList from '../Search/SearchResultsList'
import BackButton from '../../Components/BackButton'
import Link from '../../Components/Link'

const query = graphql`
  query CategoryScreenQuery($q: String!, $first: Int!, $categoryId: String!) {
    ...SearchResultsList_search @arguments(q: $q, first: $first, categoryId: $categoryId),
    me {
      ...SearchResultsList_me
    }
  }
`

const Component = props => {
  const { category } = props
  const { id } = category
  const { environment, history, queryParams } = useAppContext()
  const [searchTerm, setSearchTerm] = useState(queryParams.q || '')
  const [searchTermDebounced] = useDebounce(searchTerm, 500)

  useEffect(() => {
    history.replace(`/category/${id}?q=${searchTermDebounced}`)
  }, [searchTermDebounced, id, history])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}>
      <div style={{
        position: 'sticky',
        top: 0,
        width: '100%',
        zIndex: 99,
        borderBottom: `1px solid ${DIVIDER_COLOR}`
      }}>
        <div style={{
          height: HEADER_HEIGHT,
          backgroundColor: 'white',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
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
              placeholder="Cari..."
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
              onClick={() => setSearchTerm('')}
            >
              <IoCloseSharp size={24} color="black"/>
            </IconButton>
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
                  <span style={{ margin: '0 10px' }}>{'>'}</span>
                  }
                  <ButtonBase key={item.id} href={`/category/${item.id}`} component={Link}>
                    <span>{item.name}</span>
                  </ButtonBase>
                </div>
              )
            })}
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <span style={{ margin: '0 10px' }}>{'>'}</span>
              <span>{category.name}</span>
            </div>
          </div>
          :
          <span style={{
            fontSize: 18,
            fontWeight: '700'
          }}>{category.name}</span>
          }
        </div>
      </div>

      <div style={{
        position: 'relative',
        flexGrow: 1
      }}>
        <QueryRenderer
          environment={environment}
          variables={{ categoryId: category.id, q: searchTermDebounced || '', first: 24 }}
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
  `
})