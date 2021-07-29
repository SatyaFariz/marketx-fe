import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import Link from './Link'

const Component = props => {
  const { categories } = props
  return (
    <div style={{
      position: 'absolute',
      backgroundColor: 'white',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      padding: '20px 15px',
    }}>
      <h1 style={{
        fontSize: 24,
        margin: 0
      }}>Select Category</h1>

      <div style={{
        padding: '20px 0'
      }}>
        {categories.map(category => {
          return (
            <Link key={category.id} href={`/new/product/${category.id}`}>
              <div style={{
                padding: '15px 0'
              }}>
                <span>{category.name}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default createFragmentContainer(Component, {
  categories: graphql`
    fragment SelectTypeAndCategoryView_categories on Category @relay(plural: true) {
      id,
      name
    }
  `
})