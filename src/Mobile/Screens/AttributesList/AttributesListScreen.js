import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR } from '../../Constants'
import BackButton from '../../Components/BackButton'
import { List, ListItem, ListItemText } from '@material-ui/core'
import Button from '../../Components/Button'

const Component = props => {
  const { attributes } = props
  return (
    <div style={{
      height: '100%',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        height: HEADER_HEIGHT,
        backgroundColor: 'white',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        justifyContent: 'space-between',
        top: 0,
        zIndex: 9999,
        borderBottom: `1px solid ${HEADER_BORDER_BOTTOM_COLOR}`
      }}>
        <BackButton/>
        <div style={{ marginRight: 15, zIndex: 1 }}>
          <Button label="Add"/>
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
          }}>Attributes</h1>
        </div>
      </div>
      <div style={{
        flexGrow: 1,
        overflow: 'auto'
      }}>
        <List
        >
          {attributes.map(attribute => {
            return (
              <ListItem
                button
                key={attribute.id}
              >
                <ListItemText primary={attribute.name} />
              </ListItem>
            )
          })}
        </List>
      </div>
    </div>
  )
}

export default createFragmentContainer(Component, {
  attributes: graphql`
    fragment AttributesListScreen_attributes on Attribute @relay(plural: true) {
      id,
      name
    }
  `,
  me: graphql`
    fragment AttributesListScreen_me on User {
      id,
      isAdmin
    }
  `
})