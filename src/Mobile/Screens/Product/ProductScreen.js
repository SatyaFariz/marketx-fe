import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR, DIVIDER_COLOR } from '../../Constants'
import Color from '../../Constants/Color'
import useAppContext from '../../hooks/useAppContext'
import formatCurrency from '../../../helpers/formatCurrency'
import { useRef, useEffect, useState } from 'react'
import Link from '../../Components/Link'
import { ButtonBase, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, CircularProgress, TextField, MenuItem } from '@material-ui/core'
import BackButton from '../../Components/BackButton'
import VerifiedIcon from '../../Components/VerifiedIcon'
import { IoCloseOutline, IoCloseSharp, IoLogoWhatsapp, IoEllipsisVertical, IoStorefront } from 'react-icons/io5'
import Sheet from 'react-modal-sheet'
import UpdateProductFeaturedStatus from '../../../mutations/UpdateProductFeaturedStatus'
import SuspendProduct from '../../../mutations/SuspendProduct'
import UnsuspendProduct from '../../../mutations/UnsuspendProduct'
import Button from '../../Components/Button'
import { IoMdCreate } from 'react-icons/io'
import { Swiper, SwiperSlide } from 'swiper/react'
import truncate from 'truncate'

const Component = props => {
  const _isMounted = useRef(true)
  const scrollRef = useRef()
  const headerRef = useRef()
  const { history, environment, pathname } = useAppContext()
  const { product, me, suspensionReasons } = props
  const [carouselPos, setCarouselPos] = useState(0)
  const [showBottomSheet, setShowBottomSheet] = useState(false)
  const [updatingFeaturedStatus, setUpdatingFeaturedStatus] = useState(false)
  const [selectSuspensionReason, setSelectSuspensionReason] = useState(false)
  const [suspendingOrUnsuspending, setSuspendingOrUnsuspending] = useState(false)
  const [suspensionReasonId, setSuspensionReasonId] = useState(null)

  const handleSwipe = (obj) => {
    setCarouselPos(obj.activeIndex)
  }

  const onActionButtonClick = () => {
    if(me?.id === product.store.merchantId) {
      history.push(`/edit/product/${product.id}`)
    } else {
      if(me) {
        window.open(product.store.whatsappUrl)
      } else {
        history.push(`/login?redirect=${pathname}`)
      }
    }
  }

  const updateFeaturedStatus = () => {
    if(!updatingFeaturedStatus) {
      setUpdatingFeaturedStatus(true)
      UpdateProductFeaturedStatus(environment, { id: product.id, isFeatured: !product.isFeatured }, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          const { hasError, message } = payload.actionInfo
          alert(message)
          if(!hasError) {
            // do sth
          }
        }

        _isMounted.current && setUpdatingFeaturedStatus(false)
      })
    }
  }

  const suspend = () => {
    if(!suspendingOrUnsuspending) {
      setSuspendingOrUnsuspending(true)
      SuspendProduct(environment, { id: product.id, suspensionReasonId }, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          const { hasError, message } = payload.actionInfo
          alert(message)
          if(!hasError && _isMounted.current) {
            setSuspensionReasonId(null)
            setSelectSuspensionReason(false)
          }
        }

        _isMounted.current && setSuspendingOrUnsuspending(false)
      })
    }
  }

  const unsuspend = () => {
    if(!suspendingOrUnsuspending) {
      setSuspendingOrUnsuspending(true)
      UnsuspendProduct(environment, { id: product.id }, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          const { hasError, message } = payload.actionInfo
          alert(message)
          if(!hasError && _isMounted.current) {
            // do sth
          }
        }

        _isMounted.current && setSuspendingOrUnsuspending(false)
      })
    }
  }

  const isMyProduct = me?.id === product.store.merchantId

  useEffect(() => {
    scrollRef.current.onscroll = () => {
      const pageYOffset = scrollRef.current?.scrollTop
      if(headerRef.current) {
        if(pageYOffset > window.innerWidth) {
          headerRef.current.style.display = 'flex'
        } else {
          headerRef.current.style.display = 'none'
        }
      }
    }

    return () => _isMounted.current = false
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
        justifyContent: 'space-between',
        flexDirection: 'row',
        zIndex: 2
      }}>
        <BackButton color="white"/>
        {me?.isAdmin &&
        <IconButton 
          onClick={() => setShowBottomSheet(true)}
          style={{
            zIndex: 2,
            marginRight: 5
          }}
        >
          <IoEllipsisVertical size={24} color="white"/>
        </IconButton>
        }
      </div>

      <div 
      ref={headerRef}
      style={{
        height: HEADER_HEIGHT,
        position: 'absolute',
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        zIndex: 3,
        display: 'none',
        borderBottom: `1px solid ${HEADER_BORDER_BOTTOM_COLOR}`
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <BackButton/>
          
          <div style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center'
          }}>
            <div style={{
              height: 40,
              width: 40,
              borderRadius: '50%',
              border: `1px solid ${DIVIDER_COLOR}`,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
              marginLeft: 5,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundImage: `url("${product.images[0].url}")`
            }}/>
            <div>
              <h1 style={{
                margin: 0,
                fontSize: 18,
                fontWeight: 500,
              }}>{truncate(product.name, 18)}</h1>
              <span style={{
                color: 'rgb(83, 100, 113)',
                fontSize: 12,
                marginTop: 2,
                display: 'block'
              }}>
                {product.store.address.district.name}, {product.store.address.city.name}
              </span>
            </div>
          </div>
        </div>
        {me?.isAdmin &&
        <IconButton 
          onClick={() => setShowBottomSheet(true)}
          style={{
            zIndex: 2,
            marginRight: 5,
          }}
        >
          <IoEllipsisVertical size={24} color="black"/>
        </IconButton>
        }
        
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
          {product.images.length > 1 ?
          <>
            <Swiper 
              onSlideChange={handleSwipe}
              virtual={false}
              style={{ zIndex: 0 }}
            >
              {product.images.map((item, i) => {
                return (
                  <SwiperSlide
                    key={i}
                  >
                    <div style={{
                      position: 'relative',
                      width: '100vw',
                      paddingBottom: '100%'
                    }}>
                      <img
                        src={item.url}
                        alt={product.name}
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
                  </SwiperSlide>
                )
              })}
            </Swiper>
            {product.images.length > 1 &&
            <div style={{
              position: 'absolute',
              width: '100%',
              bottom: 15,
              height: 0,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              backgroundColor: 'white'
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
          </>
          :
          <img
            src={product.images[0].url}
            alt={product.name}
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              left: 0,
              bottom: 0,
              objectFit: 'cover'
            }}
          />
          }
        </div>

        <div style={{
          paddingTop: 20,
          paddingBottom: 20,
        }}>
          <div style={{ paddingLeft: 15, paddingRight: 15 }}>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              {product.category.map((item, i) => {
                return (
                  <div key={i} style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                    {i > 0 &&
                    <span style={{ margin: '0 10px' }}>{'>'}</span>
                    }
                    <ButtonBase key={item.id} href={`/category/${item.id}`} component={Link}>
                      <span>{item.name}</span>
                    </ButtonBase>
                  </div>
                )
              })}
            </div>
            
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
              marginTop: 16
            }}>
              <p style={{ margin: 0, whiteSpace: 'pre-line' }}>{product.desc}</p>
            </div>

            {product.specs.length > 0 &&
            <div style={{
              borderBottom: `1px solid ${DIVIDER_COLOR}`,
              padding: '16px 0px',
            }}>
              <span style={{
                color: 'rgb(118, 118, 118)',
                fontSize: 16,
                fontWeight: 500,
                textTransform: 'uppercase'
              }}>Specifications</span>
              
              <div style={{ marginTop: 16 }}>
                {product.condition &&
                <div style={{
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
                    <span>Kondisi</span>
                  </div>
                  <span>{product.condition.display}</span>
                </div>
                }
                {product.specs.map((item, i) => {
                  if(item.isMulti && JSON.parse(item.value).length === 0) return null
                  if(item.value?.trim() === '') return null
                  return (
                    <div key={i} style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      paddingTop: 10,
                      paddingBottom: 10
                    }}>
                      <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                      }}>
                        {/* <img
                          alt='product'
                          src={item.attribute.icon.url}
                          style={{
                            height: 24,
                            width: 24,
                            marginRight: 10
                          }}
                        /> */}
                        <span>{item.attribute.name}</span>
                      </div>
                      {item.isMulti ?
                      <div>
                        {JSON.parse(item.value).map((val, i) => {
                          return (
                            <div style={{
                              display: 'flex',
                              justifyContent: 'flex-end',
                              marginBottom: 5
                            }}>
                              {val}
                            </div>
                          )
                        })}
                      </div>
                      :
                      <span>{item.value}</span>
                      }

                    </div>
                  )
                })}
              </div>
            </div>
            }
          </div>

          <div style={{
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
                  <div style={{
                    height: 40,
                    width: 40,
                    backgroundColor: '#f1f1f1',
                    marginRight: 15,
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <IoStorefront size={24}/>
                  </div>
                  :  
                  <div style={{
                    height: 40,
                    width: 40,
                    border: `1px solid ${DIVIDER_COLOR}`,
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
                  
                  <div>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center'
                    }}>
                      <span style={{ fontSize: 16, fontWeight: 500 }}>{product.store.name}</span>
                      {product.store.isVerified &&
                      <VerifiedIcon/>
                      }
                    </div>
                    <span style={{
                      color: 'rgb(83, 100, 113)',
                      fontSize: 12,
                      marginTop: 2,
                      display: 'block'
                    }}>
                      {product.store.address.district.name}, {product.store.address.city.name}
                    </span>
                  </div>
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
            label={isMyProduct ? 'Edit' : 'Chat'}
            icon={isMyProduct ? <IoMdCreate/> : <IoLogoWhatsapp/>}
            onClick={onActionButtonClick}
            style={{
              visibility: !me?.isAdmin ? undefined : 'hidden'
            }}
          />
        </div>
      </div>

      {(product.isDeleted ||
        (!isMyProduct && product.isSuspended) ||
        (!isMyProduct && !product.isPublished)
      ) && !me?.isAdmin &&
      <div style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(6px)',
        zIndex: 9999999999
      }}>
        <div style={{
          position: 'absolute',
          left: 5,
          top: 5
        }}>
          <IconButton
            onClick={() => history.goBack()}
          >
            <IoCloseOutline size={30} color="white"/>
          </IconButton>
        </div>
        <h6 style={{ color: 'white', fontSize: 24 }}>Produk ini telah dihapus</h6>
      </div>
      }

      {me?.isAdmin &&
      <Sheet 
        snapPoints={[200]}
        isOpen={showBottomSheet} 
        onClose={() => setShowBottomSheet(false)}
        onCloseEnd={() => {
          setSelectSuspensionReason(false)
          setSuspensionReasonId(null)
        }}
        disableDrag
      >
        <Sheet.Container style={{
          borderRadius: 0
        }}>
          <Sheet.Content>
            <div style={{
              height: '100%'
            }}>
              {!selectSuspensionReason ?
              <List>
                <ListItem
                  button
                  onClick={product.isSuspended ? unsuspend : () => setSelectSuspensionReason(true)}
                >
                  <ListItemText primary={product.isSuspended ? "Unsuspend" : "Suspend"}/>
                  {suspendingOrUnsuspending &&
                  <ListItemSecondaryAction>
                    <CircularProgress size={18}/>
                  </ListItemSecondaryAction>
                  }
                </ListItem>
                <ListItem
                  button
                  onClick={updateFeaturedStatus}
                >
                  <ListItemText primary={product.isFeatured ? "Remove from Featured" : "Add to Featured"}/>
                  {updatingFeaturedStatus &&
                  <ListItemSecondaryAction>
                    <CircularProgress size={18}/>
                  </ListItemSecondaryAction>
                  }
                </ListItem>
              </List>
              :
              <div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  position: 'relative',
                  padding: '2px 5px',
                  borderBottom: `1px solid ${HEADER_BORDER_BOTTOM_COLOR}`
                }}>
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      fontSize: 18,
                      fontWeight: 'bold'
                    }}>Select Reason</span>
                  </div>
                  <IconButton
                    onClick={() => setSelectSuspensionReason(false)}
                    style={{
                      zIndex: 9
                    }}
                  >
                    <IoCloseSharp size={24} color="black"/>
                  </IconButton>
                  {/* <IconButton
                    disabled={suspendingOrUnsuspending}
                    onClick={() => {}}
                    style={{
                      zIndex: 9
                    }}
                  >
                    {suspendingOrUnsuspending ?
                    <CircularProgress size={24}/>
                    :
                    <IoCheckmarkSharp size={24} color="black"/>
                    }
                  </IconButton> */}
                  <Button
                    onClick={suspend}
                    style={{ marginRight: 10 }}
                    disabled={!suspensionReasonId}
                    loading={suspendingOrUnsuspending}
                    label="Simpan"
                  />
                </div>
                <div style={{
                  padding: 15
                }}>
                  <TextField
                    variant="outlined"
                    select
                    label="Suspension Reason"
                    fullWidth
                    disabled={suspendingOrUnsuspending}
                    value={suspensionReasonId}
                    onChange={(e) => setSuspensionReasonId(e.target.value)}
                    style={{
                      zIndex: 99999999999999999
                    }}
                    SelectProps={{
                      MenuProps: {
                        style: {
                          maxHeight: 500,
                          zIndex: 99999999999999999
                        }
                      }
                    }}
                  >
                    {suspensionReasons.map((option, i) => (
                      <MenuItem key={i} value={option.id}>
                        {option.title}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </div>
              }
            </div>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop onClick={() => setShowBottomSheet(false)}/>
      </Sheet>
      }
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
      isDeleted,
      isPublished,
      isFeatured,
      isSuspended,
      condition {
        display
      },
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
        value,
        isMulti,
        prefix,
        suffix
      },
      store {
        id,
        name,
        whatsappUrl,
        merchantId,
        isVerified,
        profilePicture {
          id,
          url
        },
        address {
          city {
            name
          },
          district {
            name
          }
        }
      }
    }
  `,
  me: graphql`
    fragment ProductScreen_me on User {
      id,
      isAdmin
    }
  `,
  suspensionReasons: graphql`
    fragment ProductScreen_suspensionReasons on SuspensionReason @relay(plural: true) {
      id,
      title
    }
  `
})