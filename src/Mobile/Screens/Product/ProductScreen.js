import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'

const Component = props => {
  const { product } = props
  return (
    <div style={{
      height: 2000,
      // backgroundColor: 'pink'
    }}>
      <div style={{
        width: '100vw',
        backgroundColor: 'red',
        height: 'calc(100vw * 77/137)',
        backgroundImage: `url("${product.images[0].url}")`,
        backgroundPosition:'center'
      }}>
        
      </div>

      <div style={{
        paddingTop: 20,
        paddingRight: 15,
        paddingLeft: 15,
        paddingBottom: 20
      }}>
        <span style={{
          display: 'inline-block',
          fontSize: 24,
          fontWeight: 'bold'
        }}>{product.name}</span>

        <div style={{
          borderTop: '1px solid rgb(233, 233, 233)',
          padding: '16px 0px',
          margin: '16px 0px'
        }}>

        </div>
      </div>
    </div>
  )
}

export default createFragmentContainer(Component, {
  product: graphql`
    fragment ProductScreen_product on Product {
      id,
      name,
      price,
      images {
        id,
        url
      }
    }
  `
})