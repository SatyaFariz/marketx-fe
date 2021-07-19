import { HEADER_HEIGHT } from '../../Constants'
import { IoChevronBackSharp } from 'react-icons/io5'
import { LinearProgress } from '@material-ui/core'
import graphql from 'babel-plugin-relay/macro'
// import { Query }

const query = graphql`
  query SearchScreenQuery($q: String!, $first: Int!) {
    ...SearchResultsList_search @arguments(q: $q, first: $first)
  }
`

const Component = props => {
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
        <div style={{
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
              paddingRight: 10,
              paddingLeft: 10,
              flexGrow: 1,
              borderRadius: 8,
            //  lineHeight: 24,
              border: 'none',
              outline: 'none',
              fontSize: 16,
              caretColor: '#FF385C'
            }}
          />
        </div>
      </div>

      <div style={{
        marginTop: HEADER_HEIGHT
      }}>
        <LinearProgress />
      </div>
    </div>
  )
}

export default Component