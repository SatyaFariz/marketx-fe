import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR, DIVIDER_COLOR } from '../../../Constants'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import useAppContext from '../../../hooks/useAppContext'
import Color from '../../../Constants/Color'
import { MdModeEdit } from 'react-icons/md'
import { IoPeople, IoShieldCheckmark, IoHelpCircle, IoDocumentText, IoStorefront, IoChevronBackSharp } from 'react-icons/io5'
import Link from '../../../Components/Link'

const Component = props => {
  const { history } = useAppContext()
  const { active, me } = props
  if(!me) return null
  return (
    <div style={{
      display: active ? undefined : 'none',
      backgroundColor: 'white',
      marginBottom: 68
    }}>
      <div style={{
        height: HEADER_HEIGHT,
        backgroundColor: 'white',
        width: '100%',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        borderBottom: `1px solid ${HEADER_BORDER_BOTTOM_COLOR}`
      }}>
        <div 
        onClick={() => history.goBack()}
        style={{
          paddingRight: 10,
          paddingLeft: 10,
          zIndex: 1
        }}>
          <IoChevronBackSharp size={32}/>
        </div>

        <div style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 0
        }}>
          <h1 style={{
            margin: 0,
            fontSize: 20,
            fontWeight: 500,
            textAlign: 'center'
          }}>Account</h1>
        </div>
      </div>

      <div style={{
        marginTop: HEADER_HEIGHT
      }}>
        <div style={{
          padding: '10px 15px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <div style={{
              height: 50,
              width: 50,
              borderRadius: '50%',
              backgroundColor: me.profilePicture ? undefined : Color.primary,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 15,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundImage: me.profilePicture ? `url("${me.profilePicture.url}")` : undefined
            }}>
              {!me.profilePicture &&
              <span style={{ textTransform: 'uppercase', fontWeight: 500, fontSize: 20, color: 'white' }}>{me.name[0]}</span>
              }
            </div>

          
            <div>
              <span style={{ display: 'block', fontWeight: 500, marginBottom: 3 }}>{me.name}</span>
              <span style={{ display: 'block', fontSize: 14, color: 'rgb(83, 100, 113)' }}>{me.mobileNumber}</span>
            </div>
          </div>
          
          <Link href='/profile'>
            <div style={{ padding: '0 5px'}}>
              <MdModeEdit size={24}/>
            </div>
          </Link>
        </div>

        <div style={{
          padding: '10px 15px'
        }}>
          <div style={{
            padding: '15px 0',
            borderBottom: `1px solid ${DIVIDER_COLOR}`,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <IoPeople size={24}/>
            <span style={{ marginLeft: 15 }}>About Us</span>
          </div>

          <div style={{
            padding: '15px 0',
            borderBottom: `1px solid ${DIVIDER_COLOR}`,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <IoDocumentText size={24}/>
            <span style={{ marginLeft: 15 }}>Terms of Service</span>
          </div>

          <div style={{
            padding: '15px 0',
            borderBottom: `1px solid ${DIVIDER_COLOR}`,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <IoShieldCheckmark size={24}/>
            <span style={{ marginLeft: 15 }}>Privacy Policy</span>
          </div>

          <div style={{
            padding: '15px 0',
            borderBottom: `1px solid ${DIVIDER_COLOR}`,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <IoHelpCircle size={24}/>
            <span style={{ marginLeft: 15 }}>Frequently Asked Questions</span>
          </div>

          <Link href={me.store ? `/store/${me.store.id}` : '/new/store'}>
            <div style={{
              padding: '15px 0',
              borderBottom: `1px solid ${DIVIDER_COLOR}`,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <IoStorefront size={24}/>
              <span style={{ marginLeft: 15 }}>{me.store ? 'My Store' : 'Become a Merchant'}</span>
            </div>
          </Link>

          {/* <div style={{
            padding: '15px 0',
            borderBottom: `1px solid ${DIVIDER_COLOR}`
          }}>
            <span>Login Using Email</span>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default createFragmentContainer(Component, {
  me: graphql`
    fragment AccountTab_me on User {
      id,
      name,
      mobileNumber,
      profilePicture {
        url
      },
      store {
        id
      }
    }
  `
})