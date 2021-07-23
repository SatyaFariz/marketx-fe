import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR, DIVIDER_COLOR } from '../../Constants'
import Color from '../../Constants/Color'
import { IoChevronBackSharp } from 'react-icons/io5'
import useAppContext from '../../hooks/useAppContext'
import formatCurrency from '../../../helpers/formatCurrency'
import { useRef, useEffect, useState } from 'react'
import Link from '../../Components/Link'
import { Button } from '@material-ui/core'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

const FOOTER_HEIGHT = 75

const Component = props => {
  const scrollRef = useRef()
  const { history } = useAppContext()
  const { product } = props
  const [showHeader, setShowHeader] = useState(false)
  const [carouselPos, setCarouselPos] = useState(0)

  const handleCarouselChange = (value) => {
    if(!isNaN(value))
      setCarouselPos(value)
  }

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
        borderBottom: `1px solid ${HEADER_BORDER_BOTTOM_COLOR}`
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
          position: 'relative',
          width: '100vw',
          // backgroundColor: 'red',
          height: 'calc(100vw * 77/137)',
        }}>
          <Carousel onChange={handleCarouselChange} value={carouselPos}>
            {product.images.map((item, i) => {
              return (
                <div key={i} style={{
                  width: '100vw',
                  backgroundColor: 'red',
                  height: 'calc(100vw * 77/137)',
                  backgroundImage: `url("${item.url}")`,
                  backgroundPosition:'center'
                }}/>
              )
            })}
          </Carousel>
          <div style={{
            position: 'absolute',
            width: '100%',
            bottom: 15,
            height: 0,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: 'white',
          }} pointerEvents="none">
            {product.images.map((item, i) => {
              return (
                <div key={i} style={{
                  height: 5,
                  width: 5,
                  borderRadius: '50%',
                  backgroundColor: i === carouselPos ? Color.primary : 'white',
                  marginLeft: 2,
                  marginRight: 2,
                  // border: `1px solid ${Color.primary}`,
                }}/>
              )
            })}
          </div>
        </div>
        {/* <div style={{
          width: '100vw',
          backgroundColor: 'red',
          height: 'calc(100vw * 77/137)',
          backgroundImage: `url("${product.images[0].url}")`,
          backgroundPosition:'center'
        }}>
          
        </div> */}

        <div style={{
          paddingTop: 20,
          paddingRight: 15,
          paddingLeft: 15,
          paddingBottom: 20,
          // height: 2000
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
            borderTop: `1px solid ${DIVIDER_COLOR}`,
            borderBottom: `1px solid ${DIVIDER_COLOR}`,
            padding: '16px 0px',
            margin: '16px 0px'
          }}>
            <p style={{ margin: 0, whiteSpace: 'pre-line' }}>{product.desc}</p>
          </div>

          <span style={{
            color: 'rgb(118, 118, 118)',
            fontSize: 16,
            fontWeight: 500,
            textTransform: 'uppercase'
          }}>Specifications</span>

          <div style={{ marginTop: 15, marginBottom: 15 }}>
            {product.specs.map((item, i) => {
              return (
                <div key={i} style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: 10,
                  paddingBottom: 10
                }}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}>
                    <img
                      src={item.attribute.icon.url}
                      style={{
                        height: 24,
                        width: 24,
                        marginRight: 10
                      }}
                    />
                    <span>{item.attribute.name}</span>
                  </div>
                  <span>{item.value}</span>
                </div>
              )
            })}
          </div>

          <div style={{
            borderTop: `1px solid ${DIVIDER_COLOR}`,
            marginTop: 8,
            paddingTop: 16
          }}>
            <span style={{
              color: 'rgb(118, 118, 118)',
              fontSize: 16,
              fontWeight: 500,
              textTransform: 'uppercase'
            }}>Merchant Information</span>

            <div style={{ marginTop: 16 }}>
              <Link href={`/merchant/${product.merchant.id}`}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center'
                }}>
                  {product.merchant.profilePicture ?
                  null
                  :  
                  <div style={{
                    height: 40,
                    width: 40,
                    borderRadius: '50%',
                    backgroundColor: Color.primary,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 15
                  }}>
                    <span style={{ textTransform: 'uppercase', fontWeight: 500, fontSize: 20, color: 'white' }}>{product.merchant.name[0]}</span>
                  </div>
                  }

                  <span style={{ fontSize: 16, fontWeight: 500 }}>{product.merchant.name}</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div style={{
        height: FOOTER_HEIGHT,
        backgroundColor: 'white',
        // boxShadow: 'rgb(0 0 0 / 10%) 0px -2px 6px 0px',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTop: '1px solid rgb(239, 243, 244)'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: '100%',
          paddingLeft: 15,
          paddingRight: 15,
          justifyContent: 'space-between'
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

          <Button variant="contained" disableElevation>
            Rent
          </Button>
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
      desc,
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
      },
      specs {
        id,
        attribute {
          id,
          name,
          icon {
            id,
            url
          }
        },
        value
      },
      merchant {
        id,
        name,
        profilePicture {
          id,
          url
        }
      }
    }
  `
})