import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR, DIVIDER_COLOR } from '../../Constants'
import BackButton from '../../Components/BackButton'
import { List, ListItem, ListItemText } from '@material-ui/core'
import Link from '../../Components/Link'

const Component = props => {
  const { categories } = props
  return (
    <div style={{
      height: '100%',
      backgroundColor: 'white'
    }}>
      <div style={{
        height: HEADER_HEIGHT,
        backgroundColor: 'white',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
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
        marginTop: HEADER_HEIGHT
      }}>
        <List
        >
          {categories.map(category => {
            const names = [...category.parents, category].map(item => item.name)
            const name = names.join(' > ')
            return (
              <ListItem 
                component={Link}
                button
                href={`/new/product/${category.id}`}
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
    fragment SelectCategoryView_categories on Category @relay(plural: true) {
      id,
      name,
      path,
      parents {
        id,
        name
      }
    }
  `
})