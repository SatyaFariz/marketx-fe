import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR, DIVIDER_COLOR } from '../../../Constants'
import Color from '../../../Constants/Color'
import Categories from '../../../Components/Categories'
import FeaturedProductsList from '../../../Components/FeaturedProductsList'
import Link from '../../../Components/Link'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import { IconButton, SwipeableDrawer, ButtonBase } from '@material-ui/core'
import { IoSearchOutline, IoMenuOutline } from 'react-icons/io5'
import { BiLogIn } from 'react-icons/bi'
import { useState } from 'react'
import { MdAdd } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { IoPeople, IoShieldCheckmark, IoHelpCircle, IoDocumentText, IoStorefront, IoPersonOutline } from 'react-icons/io5'
import App from '../../../../app.json'

const thisYear = new Date().getFullYear()

const Component = props => {
  const [showDrawer, setShowDrawer] = useState(false)
  const { categories, featuredProducts, me } = props

  const getSellButtonUrl = () => {
    if(me) {
      if(me.store)
        return `/store/${me.store.id}?selectCategory=1`
      
      return '/new/store'
    }
    return '/login?redirect=/sell'
  }
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}>
      <div style={{ 
        flexGrow: 1,
        paddingBottom: 70
      }}>
        <SwipeableDrawer 
          anchor="left" 
          open={showDrawer} 
          onClose={() => setShowDrawer(false)}
          onOpen={() => setShowDrawer(true)}
        >
          <div style={{
            width: '80vw',
            height: '100%',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                height: HEADER_HEIGHT,
                borderBottom: `1px solid ${HEADER_BORDER_BOTTOM_COLOR}`,
                paddingLeft: 15
              }}>
                <img
                  src="https://res.cloudinary.com/tuanrumah/image/upload/v1628197566/amazon_logo_500500.png"
                  alt="app_logo"
                  style={{
                    height: 40,
                  }}
                />
              </div>
              {!me?.isAdmin ?
              <>
                {me ?
                  <ButtonBase href="/profile" component={Link} style={{
                    display: 'flex'
                  }}>
                    <div style={{
                      padding: 15,
                      borderBottom: `1px solid ${DIVIDER_COLOR}`,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '100%'
                    }}>
                      {me.profilePicture ?
                      
                      <div style={{
                        height: 24,
                        width: 24,
                        border: `1px solid ${DIVIDER_COLOR}`,
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        backgroundImage: `url("${me.profilePicture.url}")`
                      }}
                      />
                        :
                      <div style={{
                          height: 24,
                          width: 24,
                          backgroundColor: '#f1f1f1',
                          borderRadius: '50%',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center center',
                        }}
                      >
                      <IoPersonOutline size={18} color="black"/>
                      </div>
                      }
                      <span style={{ marginLeft: 15 }}>{me.name}</span>
                    </div>
                  </ButtonBase>
                  :
                  <ButtonBase href="/login" component={Link} style={{
                    display: 'flex'
                  }}>
                    <div style={{
                      padding: 15,
                      borderBottom: `1px solid ${DIVIDER_COLOR}`,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '100%'
                    }}>
                      <BiLogIn size={24}/>
                      <span style={{ marginLeft: 15 }}>Log in / Register</span>
                    </div>
                  </ButtonBase>
                }
                
                <ButtonBase href={'/about-us'} component={Link} style={{
                  display: 'flex'
                }}>
                  <div style={{
                    padding: 15,
                    borderBottom: `1px solid ${DIVIDER_COLOR}`,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%'
                  }}>
                    <IoPeople size={24}/>
                    <span style={{ marginLeft: 15 }}>About Us</span>
                  </div>
                </ButtonBase>

                <ButtonBase href={'/terms-of-service'} component={Link} style={{
                  display: 'flex'
                }}>
                  <div style={{
                    padding: 15,
                    borderBottom: `1px solid ${DIVIDER_COLOR}`,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%'
                  }}>
                    <IoDocumentText size={24}/>
                    <span style={{ marginLeft: 15 }}>Terms of Service</span>
                  </div>
                </ButtonBase>

                <ButtonBase href={'/privacy-policy'} component={Link} style={{
                  display: 'flex'
                }}>
                  <div style={{
                    padding: 15,
                    borderBottom: `1px solid ${DIVIDER_COLOR}`,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%'
                  }}>
                    <IoShieldCheckmark size={24}/>
                    <span style={{ marginLeft: 15 }}>Privacy Policy</span>
                  </div>
                </ButtonBase>

                <ButtonBase href={'/faq'} component={Link} style={{
                  display: 'flex'
                }}>
                  <div style={{
                    padding: 15,
                    borderBottom: `1px solid ${DIVIDER_COLOR}`,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%'
                  }}>
                    <IoHelpCircle size={24}/>
                    <span style={{ marginLeft: 15 }}>Frequently Asked Questions</span>
                  </div>
                </ButtonBase>
                
                {me &&
                <>
                  <ButtonBase href={'/change-password'} component={Link} style={{
                    display: 'flex'
                  }}>
                    <div style={{
                      padding: 15,
                      borderBottom: `1px solid ${DIVIDER_COLOR}`,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '100%'
                    }}>
                      <RiLockPasswordFill size={24}/>
                      <span style={{ marginLeft: 15 }}>Ubah Password</span>
                    </div>
                  </ButtonBase>

                  <ButtonBase href={me.store ? `/store/${me.store.id}` : '/new/store'} component={Link} style={{
                    display: 'flex'
                  }}>
                    <div style={{
                      padding: 15,
                      borderBottom: `1px solid ${DIVIDER_COLOR}`,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '100%'
                    }}>
                      <IoStorefront size={24}/>
                      <span style={{ marginLeft: 15 }}>{me.store ? 'My Store' : 'Become a Merchant'}</span>
                    </div>
                  </ButtonBase>
                </>
                }
              </>
              :
              <>
                <ButtonBase href="/featured" component={Link} style={{
                  display: 'flex'
                }}>
                  <div style={{
                    padding: 15,
                    borderBottom: `1px solid ${DIVIDER_COLOR}`,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%'
                  }}>
                    <span>Featured</span>
                  </div>
                </ButtonBase>
                <ButtonBase href="/categories" component={Link} style={{
                  display: 'flex'
                }}>
                  <div style={{
                    padding: 15,
                    borderBottom: `1px solid ${DIVIDER_COLOR}`,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%'
                  }}>
                    <span>Kategori</span>
                  </div>
                </ButtonBase>
              </>
              }
            </div>

            <div style={{
              padding: 15,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Color.primary,
              fontSize: 11
            }}>
              <span style={{ color: 'white' }}>Copyright © {App.year_founded}{App.year_founded === thisYear ? '' : ` - ${thisYear}`} {App.name}</span>
            </div>
          </div>
        </SwipeableDrawer>
        <div style={{
          
        }}>
          <div style={{
            borderBottom: `1px solid ${HEADER_BORDER_BOTTOM_COLOR}`,
            position: 'sticky',
            top: 0,
            backgroundColor: 'white',
            zIndex: 999999
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <IconButton onClick={() => setShowDrawer(true)}>
                <IoMenuOutline color="black"/>
              </IconButton>
              <img
                src="https://res.cloudinary.com/tuanrumah/image/upload/v1628197566/amazon_logo_500500.png"
                alt="app_logo"
                style={{
                  height: 40,
                }}
              />
            </div>
            

            <div style={{
              padding: '0 15px',
              margin: '5px 0',
              display: 'flex'
            }}>
              <ButtonBase 
                disableRipple
                component={Link}
                href='/search'
                style={{
                  display: 'flex',
                  flexGrow: 1
                }}
              >
                <div style={{
                  backgroundColor: '#f1f1f1',
                  height: 40,
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center'
                }}>
                  <IconButton 
                    onClick={() => {}}
                  >
                    <IoSearchOutline style={{ color: 'black' }}/>
                  </IconButton>
                  <span style={{ marginLeft: 5 }}>Cari apa aja...</span>
                </div>
              </ButtonBase>
            </div>
          </div>
          <Categories categories={categories}/>
          {featuredProducts.length >= 8 && featuredProducts.length % 2 === 0 &&
          <FeaturedProductsList featuredProducts={featuredProducts}/>
          }
        </div>
      </div>
      {/* <div style={{
        padding: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        fontSize: 11
      }}>
        <span>{App.name} © {App.year_founded}{App.year_founded === thisYear ? '' : ` - ${thisYear}`}</span>
      </div> */}

      <ButtonBase component={Link} href={getSellButtonUrl()} style={{
        position: 'absolute',
        bottom: 16,
        left: '50%', /* position the left edge of the element at the middle of the parent */
        transform: 'translateX(-50%)',
        // boxShadow: 'rgb(0 0 0 / 10%) 0px 0px 8px',
        backgroundColor: Color.primary,
        borderRadius: 999
      }}>
        <div style={{
          padding: 12,
          paddingLeft: 20,
          paddingRight: 20,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <MdAdd size={18} style={{
            marginRight: 10,
            color: 'white',
            fontWeight: 'bold'
          }}/>
          <span style={{
            color: 'white',
            fontWeight: 'bold'
          }}>JUAL</span>
        </div>
        
      </ButtonBase>
    </div>
  )
}

export default createFragmentContainer(Component, {
  me: graphql`
    fragment ExploreTab_me on User {
      id,
      name,
      isAdmin,
      profilePicture {
        id,
        url
      },
      store {
        id
      }
    }
  `,
  categories: graphql`
    fragment ExploreTab_categories on Category @relay(plural: true) {
      id,
      ...Categories_categories
    }
  `,
  featuredProducts: graphql`
    fragment ExploreTab_featuredProducts on Product @relay(plural: true) {
      id,
      ...FeaturedProductsList_featuredProducts
    }
  `
})