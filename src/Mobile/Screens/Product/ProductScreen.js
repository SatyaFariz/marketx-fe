import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT } from '../../Constants'
import { IoChevronBackSharp } from 'react-icons/io5'
import useAppContext from '../../hooks/useAppContext'
import formatCurrency from '../../../helpers/formatCurrency'
import { useRef, useEffect, useState } from 'react'
import Link from '../../Components/Link'

const FOOTER_HEIGHT = 75

const Component = props => {
  const scrollRef = useRef()
  const { history } = useAppContext()
  const { product } = props
  const [showHeader, setShowHeader] = useState(false)

  useEffect(() => {
    scrollRef.current.onscroll = () => {
      const pageYOffset = scrollRef.current.scrollTop
      setShowHeader(pageYOffset > 230)
    }
  }, [])
  return (
    <div>
      <div style={{
        height: HEADER_HEIGHT,
        position: 'absolute',
        width: '100%',
        backgroundImage: 'linear-gradient(rgb(76, 76, 76), transparent)',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        zIndex: 2
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
        height: HEADER_HEIGHT,
        position: 'absolute',
        width: '100%',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        zIndex: 3,
        display: showHeader ? 'flex' : 'none',
        borderBottom: '1px solid #f1f1f1f1'
      }}>
        <div 
        onClick={() => history.goBack()}
        style={{
          paddingRight: 10,
          paddingLeft: 10
        }}>
          <IoChevronBackSharp size={32}/>
        </div>
        <div style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1 style={{
            margin: 0,
            fontSize: 20,
            fontWeight: 500,
            textAlign: 'center'
          }}>{product.name}</h1>
        </div>
        
      </div>

      <div 
      ref={scrollRef}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: FOOTER_HEIGHT,
        overflow: 'auto'
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
          paddingBottom: 20,
          height: 2000
        }}>
          <Link href={`/category/${product.category.id}`}>
            <span>{product.category.name}</span>
          </Link>
          <span style={{
            display: 'block',
            fontSize: 24,
            fontWeight: 'bold',
            marginTop: 15
          }}>{product.name}</span>

          <div style={{
            borderTop: '1px solid rgb(233, 233, 233)',
            padding: '16px 0px',
            margin: '16px 0px'
          }}>

          </div>
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
      category {
        id,
        name
      },
      rentalPeriodUnit {
        display
      }
    }
  `
})