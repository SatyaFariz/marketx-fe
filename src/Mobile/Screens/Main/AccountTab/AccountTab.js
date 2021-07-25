import LogoutButton from '../../../Components/LogoutButton'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR, DIVIDER_COLOR } from '../../../Constants'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import Color from '../../../Constants/Color'
import { MdModeEdit } from 'react-icons/md'
import Link from '../../../Components/Link'

const Component = props => {
  const { active, me } = props
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
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        borderBottom: `1px solid ${HEADER_BORDER_BOTTOM_COLOR}`
      }}>
        <h1 style={{
          margin: 0,
          fontSize: 20,
          fontWeight: 500,
          textAlign: 'center'
        }}>Account</h1>
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
              backgroundColor: Color.primary,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 15
            }}>
              <span style={{ textTransform: 'uppercase', fontWeight: 500, fontSize: 20, color: 'white' }}>{me.name[0]}</span>
            </div>

          
            <div>
              <span style={{ display: 'block', fontWeight: 500, marginBottom: 3 }}>{me.name}</span>
              <span style={{ display: 'block', fontSize: 14 }}>{me.mobileNumber}</span>
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
            borderBottom: `1px solid ${DIVIDER_COLOR}`
          }}>
            <span>About Us</span>
          </div>

          <div style={{
            padding: '15px 0',
            borderBottom: `1px solid ${DIVIDER_COLOR}`
          }}>
            <span>Terms of Service</span>
          </div>

          <div style={{
            padding: '15px 0',
            borderBottom: `1px solid ${DIVIDER_COLOR}`
          }}>
            <span>Privacy Policy</span>
          </div>

          <div style={{
            padding: '15px 0',
            borderBottom: `1px solid ${DIVIDER_COLOR}`
          }}>
            <span>Frequently Asked Questions</span>
          </div>

          <div style={{
            padding: '15px 0',
            borderBottom: `1px solid ${DIVIDER_COLOR}`
          }}>
            <span>My Rental History</span>
          </div>

          <div style={{
            padding: '10px 0',
            borderBottom: `1px solid ${DIVIDER_COLOR}`
          }}>
            <span>Become a Merchant</span>
          </div>
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
      }
    }
  `
})