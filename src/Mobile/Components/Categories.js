import { createFragmentContainer } from 'react-relay'
import { DIVIDER_COLOR } from '../Constants'
import graphql from 'babel-plugin-relay/macro'
import Link from '../Components/Link'

const Component = props => {
  const { categories } = props
  return (
    <div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '20px 0',
        // borderBottom: `1px solid ${DIVIDER_COLOR}`
      }}>
          <div style={{
            width: 118,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}>
            <img
              alt="Buy"
              src="https://www.cumi.id/static/media/categoryClothingBeauty.f3b1100b.svg"
              style={{
                height: 70,
                width: 70,
                marginBottom: 10
              }}
            />
            <span style={{ textAlign: 'center' }}>Beli</span>
          </div>
        {categories.map((item, i) => {
          if(['rental_product', 'service'].includes(item.listingType) && item.level === 1) {
            return (
                <div key={i} style={{
                  width: 118,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'center'
                }}>
                  <img
                    alt={item.name}
                    src={item.icon?.url}
                    style={{
                      height: 70,
                      width: 70,
                      marginBottom: 10
                    }}
                  />
                  <span style={{ textAlign: 'center' }}>{item.name}</span>
                </div>
            )
          } else {
            return null
          }
        })}
      </div>

      <div style={{
        borderBottom: `1px solid ${DIVIDER_COLOR}`,
        margin: '0 20px',
        marginBottom: 20
      }}/>
      
      {/* <h1 style={{
        fontSize: 24,
        // lineHeight: 27,
        fontWeight: 'bold',
        textAlign: 'center'
      }}>Explore Our Categories</h1> */}

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {categories.map((item, i) => {
          if(item.level > 1) return null
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
      level,
      listingType,
      icon {
        url
      },
      children {
        id,
        name,
        level,
        icon {
          url
        }
      }
    }
  `
})