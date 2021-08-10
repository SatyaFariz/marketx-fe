import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR, DIVIDER_COLOR } from '../../Constants'
import Color from '../../Constants/Color'
import useAppContext from '../../hooks/useAppContext'
import formatCurrency from '../../../helpers/formatCurrency'
import { useRef, useEffect, useState } from 'react'
import Link from '../../Components/Link'
import { Button, ButtonBase } from '@material-ui/core'
import BackButton from '../../Components/BackButton'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

const Component = props => {
  const scrollRef = useRef()
  const { history } = useAppContext()
  const { product, me } = props
  const [showHeader, setShowHeader] = useState(false)
  const [carouselPos, setCarouselPos] = useState(0)

  const handleCarouselChange = (value) => {
    if(!isNaN(value))
      setCarouselPos(value)
  }

  const onActionButtonClick = () => {
    if(me?.id === product.store.merchantId) {
      history.push(`/edit/product/${product.id}`)
    } else {
      window.open(product.store.whatsappLink)
    }
  }

  useEffect(() => {
    scrollRef.current.onscroll = () => {
      const pageYOffset = scrollRef.current.scrollTop
      setShowHeader(pageYOffset > window.innerWidth)
    }
  }, [])
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      maxHeight: '100%'
    }}>
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
        <BackButton color="white"/>
      </div>

      <div style={{
        height: HEADER_HEIGHT,
        position: 'absolute',
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        zIndex: 3,
        display: showHeader ? 'flex' : 'none',
        borderBottom: `1px solid ${HEADER_BORDER_BOTTOM_COLOR}`
      }}>
        <BackButton/>
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
        flexGrow: 1,
        overflow: 'auto'
      }}>
        <div style={{
          position: 'relative',
          width: '100vw',
          height: '100vw',
        }}>
          <Carousel onChange={handleCarouselChange} value={carouselPos} draggable={product.images.length > 1}>
            {product.images.map((item, i) => {
              return (
                <div key={i} style={{
                  position: 'relative',
                  width: '100vw',
                  paddingBottom: '100%'
                }}>
                  <img
                    src={item.url}
                    style={{
                      position: 'absolute',
                      height: '100%',
                      width: '100%',
                      left: 0,
                      bottom: 0,
                      objectFit: 'cover'
                    }}
                  />
                </div>
              )
            })}
          </Carousel>
          {product.images.length > 1 &&
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
                }}/>
              )
            })}
          </div>
          }
        </div>

        <div style={{
          paddingTop: 20,
          paddingBottom: 20,
        }}>
          <div style={{ paddingLeft: 15, paddingRight: 15 }}>
            {product.category.map(item => {
              return (
                <ButtonBase key={item.id} href={`/category/${item.id}`} component={Link}>
                  <span>{item.name}</span>
                </ButtonBase>
              )
            })}
            
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
                if(item.value?.trim() === '') return null
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
                        alt='product'
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
              textTransform: 'uppercase',
              margin: '0 15px'
            }}>Merchant Information</span>

            <div style={{ marginTop: 16 }}>
              <ButtonBase href={`/store/${product.store.id}`} component={Link} style={{
                display: 'flex'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: '0 15px',
                  width: '100%'
                }}>
                  {!product.store.profilePicture ?
                  null
                  :  
                  <div style={{
                    height: 40,
                    width: 40,
                    borderRadius: '50%',
                    backgroundColor: product.store.profilePicture ? undefined : Color.primary,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 15,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundImage: product.store.profilePicture ? `url("${product.store.profilePicture.url}")` : undefined
                  }}>
                    {!product.store.profilePicture &&
                    <span style={{ textTransform: 'uppercase', fontWeight: 500, fontSize: 20, color: 'white' }}>{product.store.name[0]}</span>
                    }
                  </div>
                  }

                  <span style={{ fontSize: 16, fontWeight: 500 }}>{product.store.name}</span>
                </div>
              </ButtonBase>
            </div>
          </div>
        </div>
      </div>


      <div style={{
        backgroundColor: 'white',
        width: '100%',
        borderTop: '1px solid rgb(239, 243, 244)'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '10px 15px',
          justifyContent: 'space-between'
        }}>
          <div>
            {product.rentalDuration &&
            <span style={{
              display: 'block'
            }}>Price per {product.rentalDuration.display}</span>
            }
            <span style={{
              fontSize: 16,
              fontWeight: '500',
              marginTop: 5,
              display: 'block'
            }}>{formatCurrency(product.price)}</span>
          </div>

          <Button 
            variant="contained" 
            disableElevation
            onClick={onActionButtonClick}
          >
            {me?.id === product.store.merchantId ? 'Edit' : 'Rent'}
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
      rentalDuration {
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
      store {
        id,
        name,
        whatsappLink,
        merchantId,
        profilePicture {
          id,
          url
        }
      }
    }
  `,
  me: graphql`
    fragment ProductScreen_me on User {
      id
    }
  `
})