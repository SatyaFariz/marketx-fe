import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import Link from '../Components/Link'

const Component = props => {
  const { categories } = props
  return (
    <div>
      <h1 style={{
        fontSize: 24,
        // lineHeight: 27,
        fontWeight: 'bold',
        textAlign: 'center'
      }}>Explore Our Categories</h1>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {categories.map((item, i) => {
          return (
            <Link href={`/category/${item.id}`} key={item.id}>
              <div key={i} style={{
                width: 118,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginBottom: 15
              }}>
                <img
                  alt={item.name}
                  src={item.icon.url}
                  style={{
                    height: 70,
                    width: 70,
                    marginBottom: 10
                  }}
                />
                <span style={{ textAlign: 'center' }}>{item.name}</span>
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
    fragment Categories_categories on Category @relay(plural: true) {
      id,
      name,
      icon {
        url
      }
    }
  `
})