import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR, DIVIDER_COLOR } from '../../Constants'
import Color from '../../Constants/Color'
import Categories from '../../Components/Categories'
import FeaturedProductsList from '../../Components/FeaturedProductsList'
import Link from '../../Components/Link'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import { IconButton, SwipeableDrawer, ButtonBase } from '@material-ui/core'
import { IoSearchOutline, IoMenuOutline } from 'react-icons/io5'
import { BiLogIn } from 'react-icons/bi'
import { useState } from 'react'
import { MdAdd } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { IoPeople, IoShieldCheckmark, IoHelpCircle, IoDocumentText, IoPersonOutline } from 'react-icons/io5'
import { FcDocument } from 'react-icons/fc'
import App from '../../../app.json'
import useAppContext from '../../hooks/useAppContext'
import ComingSoonPage from '../ComingSoonPage'

const thisYear = new Date().getFullYear()

const Component = props => {
  const { isMobile, isProduction } = useAppContext()
  const [showDrawer, setShowDrawer] = useState(false)
  const { categories, featuredProducts, me } = props

  const getSellButtonUrl = () => {
    if(me) {
      if(me.store)
        return `/ad.account/${me.store.id}?selectCategory=1`
      
      return '/new/ad.account'
    }
    return '/login?redirect=/sell'
  }

  if(!isMobile && isProduction) {
    return (
      <ComingSoonPage/>
    )
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
            width: '85vw',
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
                      <span style={{ marginLeft: 15 }}>Masuk / Daftar</span>
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
                    <span style={{ marginLeft: 15 }}>Tentang Kami</span>
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
                    <span style={{ marginLeft: 15 }}>Ketentuan Layanan</span>
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
                    <span style={{ marginLeft: 15 }}>Kebijakan Privasi</span>
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
                    <span style={{ marginLeft: 15 }}>Pertanyaan yg Sering Ditanyakan</span>
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
                      <span style={{ marginLeft: 15 }}>Ubah Kata Sandi</span>
                    </div>
                  </ButtonBase>

                  <ButtonBase href={me.store ? `/ad.account/${me.store.id}` : '/new/ad.account'} component={Link} style={{
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
                      <FcDocument size={24}/>
                      <span style={{ marginLeft: 15 }}>{me.store ? 'Iklan Saya' : 'Buat Iklan'}</span>
                    </div>
                  </ButtonBase>
                </>
                }
              </>
              :
              <>
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
                <ButtonBase href="/attributes" component={Link} style={{
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
                    <span>Atribut</span>
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
          <Categories categories={categories} me={me}/>
          {featuredProducts.length >= 8 && featuredProducts.length % 2 === 0 &&
          <FeaturedProductsList featuredProducts={featuredProducts}/>
          }
        </div>
      </div>

      <ButtonBase component={Link} href={getSellButtonUrl()} style={{
        position: 'absolute',
        bottom: 16,
        left: '50%',
        transform: 'translateX(-50%)',
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
          }}>Iklan</span>
        </div>
        
      </ButtonBase>
    </div>
  )
}

export default createFragmentContainer(Component, {
  me: graphql`
    fragment HomeScreen_me on User {
      id,
      name,
      isAdmin,
      ...Categories_me,
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
    fragment HomeScreen_categories on Category @relay(plural: true) {
      id,
      ...Categories_categories
    }
  `,
  featuredProducts: graphql`
    fragment HomeScreen_featuredProducts on Product @relay(plural: true) {
      id,
      ...FeaturedProductsList_featuredProducts
    }
  `
})