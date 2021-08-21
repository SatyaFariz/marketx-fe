import { IoBackspaceOutline } from 'react-icons/io5'
import { HEADER_HEIGHT } from '../Constants'
import Color from '../Constants/Color'
import { useState, useEffect, useRef } from 'react'
import Countdown from 'react-countdown'
import { Button } from '@material-ui/core'
import BackButton from './BackButton'

const keys = [
  1, 2, 3,
  4, 5, 6,
  7, 8, 9,
  'C', 0, 'backspace'
]

const codeLen = 4

const Component = props => {
  const { expiry } = props
  const _isMounted = useRef(true)
  const { mobileNumber, loading, onSubmit } = props
  const handleSubmit = useRef(onSubmit)
  const [code, setCode] = useState('')
  const [expired, setExpired] = useState(false)

  const enterKey = key => {
    if(!loading) {
      if(code.length < codeLen && Number.isInteger(key)) {
        setCode(prev => `${prev}${key}`)
      } else if(code.length > 0 && key === 'backspace') {
        setCode(prev => prev.substr(0, prev.length - 1))
      } else if(key === 'C') {
        setCode('')
      }
    }
  }

  useEffect(() => {
    if(code.length === codeLen) {
      handleSubmit.current(code)
    }
  }, [code])

  useEffect(() => {
    handleSubmit.current = onSubmit
  }, [onSubmit])

  useEffect(() => {
    return () => _isMounted.current = false
  }, [])

  useEffect(() => {
    setExpired(false)
  }, [expiry])

  return (
    <div>
      <div style={{
        height: HEADER_HEIGHT,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <BackButton/>
        <Button
          variant="contained"
          disableElevation
          style={{
            textTransform: 'none',
            marginRight: 15
          }}
          onClick={props.resend}
        >
          Resend
        </Button>
      </div>
      
      <div style={{
        paddingLeft: 20,
        paddingRight: 20
      }}>
        <h1 style={{ fontSize: 26 }}>Enter code sent to your number</h1>
        <p>We have sent 4-digit code to number {mobileNumber}</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gridColumnGap: 15,
          marginTop: 50
        }}>
          {new Array(codeLen).fill(0).map((item, i) => {
            return (
              <div key={i} style={{
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

        <div style={{ 
          marginTop: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {expired ?
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
              <span style={{
                display: 'block'
              }}>Your code has already expired.</span>
            </div>
            :
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
              <span style={{
                display: 'block',
              }}>Your code will expire in</span>
              <Countdown
                key={expiry}
                date={expiry}
                onComplete={() => setExpired(true)}
                renderer={({ minutes, seconds }) => {
                  return (
                    <span style={{ marginTop: 5, color: minutes < 1 ? 'red' : 'black' }}>{` ${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</span>
                  )
                }}
              />
            </div>
          }
        </div>
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#f1f1f1f1'
      }}>
        {keys.map((key, i) => {
          return (
            <button 
            key={i}
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