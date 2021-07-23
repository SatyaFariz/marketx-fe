import { IoBackspaceOutline } from 'react-icons/io5'
// const keys = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   ['C', 0, 'backspace']
// ]
const keys = [
  1, 2, 3,
  4, 5, 6,
  7, 8, 9,
  'C', 0, 'backspace'
]
const Component = props => {
  return (
    <div>
      <div style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#f1f1f1f1'
      }}>
        {keys.map(key => {
          return (
            <button style={{
              width: 'calc(100% / 3)',
              border: 'none',
              backgroundColor: 'transparent',
              paddingTop: 30,
              paddingBottom: 30
            }}>
              {key === 'backspace' ?
              <IoBackspaceOutline size={24}/>
              :
              <span style={{ fontSize: 24 }}>{key}</span>
              }
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Component