import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR, DIVIDER_COLOR } from '../../Constants'
import { TextField, Button } from '@material-ui/core'
import { useState, useRef, useEffect } from 'react'
import useAppContext from '../../hooks/useAppContext'
import { IoChevronBackSharp } from 'react-icons/io5'
import OTPView from '../../Components/OTPView'
import SendOtpCode from '../../../mutations/SendOtpCode'
import CreateStore from '../../../mutations/CreateStore'

const Component = props => {
  const _isMounted = useRef(true)
  const { history, environment, queryParams } = useAppContext()
  const [storeName, setStoreName] = useState('')
  const [whatsappNumber, setWhatsappNumber] = useState('')
  const [loading, setLoading] = useState(false)
  const [sendingCode, setSendingCode] = useState(false)
  const [expiry, setExpiry] = useState(null)

  const _setStoreName = (e) => {
    setStoreName(e.target.value.trimLeft())
  }

  const _setWhatsappNumber = (e) => {
    if(!loading) {
      const allowedChars = '1234567890'
      const { value } = e.target
      if(value.length && !value.startsWith('0')) return
      if(value.length && !allowedChars.includes(value[value.length - 1])) return
      setWhatsappNumber(value)
    }
  }

  const sendOtpCode = () => {
    if(whatsappNumber.length > 0 && !sendingCode) {
      setSendingCode(true)
      SendOtpCode(environment, { mobileNumber: whatsappNumber }, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          const { hasError, message } = payload.actionInfo
          if(hasError) {
            alert(message)
          } else {
            const { expiry } = payload
            setExpiry(expiry)
            if(!queryParams.otp)
              history.push(`/store/new?otp=1`)
          }
        }

        _isMounted.current && setSendingCode(false)
      })
    }
  }

  const createStore = () => {
    if(!loading) {
      setLoading(true)
      CreateStore(environment, { name: storeName, whatsappNumber }, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          const { hasError, message } = payload.actionInfo
          alert(message)
          if(!hasError) {
            const { id } = payload.store
            history.replace(`/store/${id}`)
          }
        }

        _isMounted.current && setLoading(false)
      })
    }
  }

  useEffect(() => {
    return () => _isMounted.current = false
  }, [])

  return (
    <div>
      <div style={{
        height: HEADER_HEIGHT,
        backgroundColor: 'white',
        width: '100%',
        display: 'flex',
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
            textAlign: 'center',
          }}>Create Store</h1>
        </div>
      </div>

      <div style={{
        marginTop: HEADER_HEIGHT,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30
      }}>
        <TextField
          variant="outlined"
          label="Store Name"
          fullWidth
          style={{
            marginTop: 10,
            marginBottom: 10
          }}
          onChange={_setStoreName}
          value={storeName}
        />

        <TextField
          variant="outlined"
          label="WhatsApp Number"
          fullWidth
          style={{
            marginTop: 10,
            marginBottom: 10
          }}
          onChange={_setWhatsappNumber}
          value={whatsappNumber}
          placeholder="Ex: 082322343005"
          type="tel"
        />

        <Button
          variant="contained"
          style={{
            marginTop: 10,
            marginBottom: 10,
            textTransform: 'none',
            height: 44
          }}
          disableElevation
          fullWidth
          onClick={sendOtpCode}
        >
          Next
        </Button>
      </div>

      {queryParams.otp === '1' &&
      <div style={{
        position: 'absolute',
        backgroundColor: 'white',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: 999
      }}>
        <OTPView
          onSubmit={createStore}
          expiry={expiry}
          loading={false}
          whatsappNumber={whatsappNumber}
          resend={sendOtpCode}
          sending={sendingCode}
        />
      </div>
      }
    </div>
  )
}

export default Component