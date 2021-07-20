import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT } from '../../Constants'
import { IoChevronBackSharp } from 'react-icons/io5'
import useAppContext from '../../hooks/useAppContext'
import formatCurrency from '../../../helpers/formatCurrency'

const FOOTER_HEIGHT = 75

const Component = props => {
  const { history } = useAppContext()
  const { product } = props
  return (
    <div style={{
      height: 2000,
      // backgroundColor: 'pink'
    }}>
      <div style={{
        height: HEADER_HEIGHT,
        position: 'absolute',
        width: '100%',
        backgroundImage: 'linear-gradient(rgb(76, 76, 76), transparent)',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
      }}>
        <div 
        onClick={() => history.goBack()}
        style={{
          paddingRight: 10,
          paddingLeft: 10
        }}>
          <IoChevronBackSharp size={32} color={'white'}/>
        </div>
      </div>

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


      <div style={{
        height: FOOTER_HEIGHT,
        backgroundColor: 'white',
        boxShadow: 'rgb(0 0 0 / 10%) 0px -2px 6px 0px',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15
      }}>
        <div>
          <span style={{
            display: 'block'
          }}>Price per {product.rentalPeriodUnit.display}</span>
          <span style={{
            fontSize: 16,
            fontWeight: '500',
            marginTop: 5,
            display: 'block'
          }}>{formatCurrency(product.price)}</span>
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
      },
      rentalPeriodUnit {
        display
      }
    }
  `
})