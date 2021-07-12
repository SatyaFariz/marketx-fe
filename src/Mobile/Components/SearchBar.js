import { IoSearchOutline } from 'react-icons/io5'

const height = 48

const Component = (props) => {
  return (
    <div style={{
      position: 'absolute',
      width: '100%',
      top: 0
    }}>
    <div style={{
      height,
      borderRadius: 8,
      backgroundColor: 'white',
    //  width: '100%',
      boxShadow: '0 4px 10px 2px rgb(0 0 0 / 10%)',
      marginTop: 10,
      marginLeft: 15,
      marginRight: 15,
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
      <input
        placeholder="What do you want to rent today?"
        style={{
          width: '100%',
          borderRadius: 8,
          lineHeight: 24,
          border: 'none',
          outline: 'none',
          fontSize: 16,
          caretColor: '#FF385C'
        }}
      />
    </div>
    </div>
  )
}

export default Component