import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR } from '../../Constants'
import BackButton from '../../Components/BackButton'
import { List, ListItem, ListItemText } from '@material-ui/core'
import Link from '../../Components/Link'

const Component = props => {
  const { categories } = props
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
        top: 0,
        zIndex: 9999,
        borderBottom: `1px solid ${HEADER_BORDER_BOTTOM_COLOR}`
      }}>
        <BackButton/>
        
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
          }}>Select Category</h1>
        </div>
      </div>
      <div style={{
        flexGrow: 1,
        overflow: 'auto'
      }}>
        <List
        >
          {categories.map(category => {
            const names = [...category.ancestors, category].map(item => item.name)
            const name = names.join(' > ')
            return (
              <ListItem
                component={Link}
                button
                href={`/category/${category.id}/detail`}
                key={category.id}
              >
                <ListItemText primary={name} />
              </ListItem>
            )
          })}
        </List>
      </div>
    </div>
  )
}

export default createFragmentContainer(Component, {
  categories: graphql`
    fragment CategoriesListScreen_categories on Category @relay(plural: true) {
      id,
      name,
      ancestors {
        id,
        name
      }
    }
  `
})