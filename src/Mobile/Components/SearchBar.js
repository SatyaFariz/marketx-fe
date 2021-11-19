import { IoSearchOutline } from 'react-icons/io5'
import Link from '../Components/Link'
const height = 48

const Component = (props) => {
  return (
    <div style={{
      position: 'absolute',
      // width: '100%',
      top: 10,
      left: 15,
      right: 15
    }}>
      <Link href='/search'>
        <div style={{
          height,
          borderRadius: 8,
          backgroundColor: 'white',
        //  width: '100%',
          boxShadow: '0 4px 10px 2px rgb(0 0 0 / 10%)',
        
          display: 'flex',
        }}>
          <div style={{
            height,
            width: height,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <IoSearchOutline size={24} color={'#FF385C'}/>
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <span>What do you want to rent today?</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Component