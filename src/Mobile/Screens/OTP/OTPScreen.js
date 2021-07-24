import { IoBackspaceOutline, IoChevronBackSharp } from 'react-icons/io5'
import { HEADER_HEIGHT } from '../../Constants'
import Color from '../../Constants/Color'
import useAppContext from '../../hooks/useAppContext'
import { useState } from 'react'

const keys = [
  1, 2, 3,
  4, 5, 6,
  7, 8, 9,
  'C', 0, 'backspace'
]

const codeLen = 4

const Component = props => {
  const { history, queryParams } = useAppContext()
  const [code, setCode] = useState('')

  const enterKey = key => {
    if(code.length < codeLen && Number.isInteger(key)) {
      setCode(prev => `${prev}${key}`)
    } else if(code.length > 0 && key === 'backspace') {
      setCode(prev => prev.substr(0, prev.length - 1))
    } else if(key === 'C') {
      setCode('')
    }
  }

  return (
    <div>
      <div style={{
        height: HEADER_HEIGHT,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <div 
        onClick={() => history.goBack()}
        style={{
          paddingRight: 10,
          paddingLeft: 10
        }}>
          <IoChevronBackSharp size={32}/>
        </div>
      </div>
      
      <div style={{
        paddingLeft: 20,
        paddingRight: 20
      }}>
        <h1>Enter code sent to your number</h1>
        <p>We have sent 4-digit code to number {queryParams.mobileNumber}</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gridColumnGap: 15,
          marginTop: 50
        }}>
          {new Array(codeLen).fill(0).map((item, i) => {
            return (
              <div style={{
                borderBottom: `2px solid ${Color.primary}`,
                paddingTop: 10,
                paddingBottom: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <span style={{
                  visibility: code[i] ? undefined : 'hidden',
                  fontSize: 24,
                  fontWeight: 'bold'
                }}>{code[i] || '0'}</span>
              </div>
            )
          })}
        </div>
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#f1f1f1f1'
      }}>
        {keys.map(key => {
          return (
            <button 
            onClick={() => enterKey(key)}
            style={{
              width: 'calc(100% / 3)',
              border: 'none',
              backgroundColor: 'transparent',
              paddingTop: 15,
              paddingBottom: 15
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