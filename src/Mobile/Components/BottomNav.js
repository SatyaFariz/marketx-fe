import { IoSearchOutline, IoPersonOutline, IoMailOutline, IoDocumentTextOutline } from 'react-icons/io5'
import { DIVIDER_COLOR } from '../Constants'
import Link from '../Components/Link'

const Component = props => {
  return (
    <div style={{
      position: 'fixed',
      height: 68,
      width: '100%',
      left: 0,
      bottom: 0,
      // boxShadow: '0px -2px 4px 0px rgb(230 223 230 / 75%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderTop: `1px solid ${DIVIDER_COLOR}`
    }}>
      <Link 
      onClick={() => props?.onIndexChange(0)}
      style={{
        width: '25%',
        height: 47,
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <IoSearchOutline size={24} color={'#FF385C'}/>
        <span style={{ fontSize: 14 }}>Explore</span>
      </Link>

      <div 
      onClick={() => props?.onIndexChange(1)}
      style={{
        width: '25%',
        height: 47,
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <IoDocumentTextOutline size={24} color={'#FF385C'}/>
        <span style={{ fontSize: 14 }}>Rented</span>
      </div>

      <div 
      onClick={() => props?.onIndexChange(2)}
      style={{
        width: '25%',
        height: 47,
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <IoMailOutline size={24} color={'#FF385C'}/>
        <span style={{ fontSize: 14 }}>Notification</span>
      </div>

      <Link 
      href="/login"
      // onClick={() => props?.onIndexChange(3)}
      style={{
        width: '25%',
        height: 47,
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <IoPersonOutline size={24} color={'#FF385C'}/>
        <span style={{ fontSize: 14 }}>Profile</span>
      </Link>
    </div>
  )
}

export default Component