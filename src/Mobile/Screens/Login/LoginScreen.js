import { LOGO_URL } from '../../Constants'
import { TextField, Button } from '@material-ui/core'
import { useState, useRef, useEffect } from 'react'
import useAppContext from '../../hooks/useAppContext'
import SendOtpCode from '../../../mutations/SendOtpCode'
import Link from '../../Components/Link'
import Color from '../../Constants/Color'
import OTPView from '../../Components/OTPView'
import Login from '../../../mutations/Login'

const Component = props => {
  const _isMounted = useRef(true)
  const { history, queryParams, environment, resetEnvironment } = useAppContext()
  const [mobileNumber, setPhoneNumber] = useState(queryParams?.mobileNumber || '')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    if(!loading) {
      const allowedChars = '1234567890'
      const { value } = e.target
      if(value.length && !value.startsWith('0')) return
      if(value.length && !allowedChars.includes(value[value.length - 1])) return
      setPhoneNumber(value)
    }
  }

  const sendOtpCode = () => {
    if(mobileNumber.length > 0 && !loading) {
      setLoading(true)
      SendOtpCode(environment, { mobileNumber, action: 'login' }, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          const { hasError, message } = payload.actionInfo
          if(hasError) {
            alert(message)
          } else {
            history.push(`/login?otp=1`)
          }
        }

        _isMounted.current && setLoading(false)
      })
    }
  }

  const login = (code) => {
    if(!loading) {
      setLoading(true)
      Login(environment, { loginId: mobileNumber, password: code }, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          const { hasError, message } = payload.actionInfo
          alert(message)
          if(!hasError) {
            // do sth
            history.push('/')
            resetEnvironment()
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
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30
      }}>
        <img
          alt="twitter"
          src={LOGO_URL}
          style={{
            height: 38,
            width: 38
          }}
        />

        <h1 style={{
          marginTop: 30,
          marginBottom: 10
        }}>Log in to RentX</h1>

        <TextField
          variant="outlined"
          label="Mobile Number"
          fullWidth
          style={{
            marginTop: 10,
            marginBottom: 10
          }}
          onChange={handleChange}
          value={mobileNumber}
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
          disabled={mobileNumber.length < 12}
        >
          Log in
        </Button>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20
        }}>
          <Link href='/register' style={{ color: Color.link }}>
            <span>Create a new account</span>
          </Link>
        </div>
        
      </div>

      {mobileNumber.length > 0 && queryParams.otp === '1' &&
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
          onSubmit={login}
          loading={false}
          mobileNumber={mobileNumber}
          resend={sendOtpCode}
        />
      </div>
      }
    </div>
  )
}

export default Component