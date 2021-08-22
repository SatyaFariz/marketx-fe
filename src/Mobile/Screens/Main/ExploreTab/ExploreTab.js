import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR, DIVIDER_COLOR } from '../../../Constants'
import Categories from '../../../Components/Categories'
import FeaturedProductsList from '../../../Components/FeaturedProductsList'
import Link from '../../../Components/Link'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import { IconButton, Drawer, ButtonBase } from '@material-ui/core'
import { IoSearchOutline, IoMenuOutline } from 'react-icons/io5'
import { BiLogIn } from 'react-icons/bi'
import { useState } from 'react'
import { IoPeople, IoShieldCheckmark, IoHelpCircle, IoDocumentText, IoStorefront, IoPersonOutline } from 'react-icons/io5'

const Component = props => {
  const [showDrawer, setShowDrawer] = useState(false)
  const { active, categories, featuredProducts, me } = props
  
  return (
    <div style={{
      display: active ? undefined : 'none'
    }}>
      <Drawer anchor="left" open={showDrawer} onClose={() => setShowDrawer(false)}>
        <div style={{
          width: '80vw',
          backgroundColor: 'white'
        }}>
        
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
            
            <div style={{
              padding: 15,
              borderBottom: `1px solid ${DIVIDER_COLOR}`,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <IoPeople size={24}/>
              <span style={{ marginLeft: 15 }}>About Us</span>
            </div>
            <div style={{
              padding: 15,
              borderBottom: `1px solid ${DIVIDER_COLOR}`,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <IoDocumentText size={24}/>
              <span style={{ marginLeft: 15 }}>Terms of Service</span>
            </div>

            <div style={{
              padding: 15,
              borderBottom: `1px solid ${DIVIDER_COLOR}`,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <IoShieldCheckmark size={24}/>
              <span style={{ marginLeft: 15 }}>Privacy Policy</span>
            </div>

            <div style={{
              padding: 15,
              borderBottom: `1px solid ${DIVIDER_COLOR}`,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <IoHelpCircle size={24}/>
              <span style={{ marginLeft: 15 }}>Frequently Asked Questions</span>
            </div>
            
            {me &&
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
          </>
          }
        </div>
      </Drawer>
      <div style={{
        
      }}>
        {/* <img
          src="https://www.lesitedelasneaker.com/wp-content/images/2019/11/air-jordan-1-high-bloodline-banner.jpg"
          alt="test"
          style={{
            // height: 200,
            width: '100%'
          }}
        /> */}
        <div style={{
          // height: 56,
          borderBottom: `1px solid ${HEADER_BORDER_BOTTOM_COLOR}`,
          // display: 'flex',
          // // flexDirection: 'row',
          // justifyContent: 'space-between',
          // alignItems: 'center',
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
        <FeaturedProductsList featuredProducts={featuredProducts}/>
      </div>
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