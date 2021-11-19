import { TextField, ButtonBase } from '@material-ui/core'
import { useState, useRef, useEffect } from 'react'
import useAppContext from '../../hooks/useAppContext'
import SendOtpCode from '../../../mutations/SendOtpCode'
import Link from '../../Components/Link'
import Color from '../../Constants/Color'
import OTPView from '../../Components/OTPView'
import Login from '../../../mutations/Login'
import LoginWithEmail from '../../../mutations/LoginWithEmail'
import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import Button from '../../Components/Button'
import App from '../../../app.json'
import { isEmail } from 'validator'
import Logo from '../../../assets/marketx_logo.jpg'

const useEmail = true

const Component = props => {
  const { me } = props
  const _isMounted = useRef(true)
  const { history, environment, resetEnvironment, queryParams } = useAppContext()
  const [mobileNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [sendingCode, setSendingCode] = useState(false)
  const [expiry, setExpiry] = useState(null)
  const [showOTPView, setShowOTPView] = useState(false)

  const handleChange = (e) => {
    const allowedChars = '1234567890'
    const { value } = e.target
    if(value.length && !value.startsWith('0')) return
    if(value.length && !allowedChars.includes(value[value.length - 1])) return
    setPhoneNumber(value)
  }

  const sendOtpCode = () => {
    if(mobileNumber.length > 0 && !sendingCode) {
      setSendingCode(true)
      SendOtpCode(environment, { mobileNumber, action: 'login' }, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          const { hasError, message } = payload.actionInfo
          if(hasError) {
            alert(message)
          } else {
            const { expiry } = payload
            setExpiry(expiry)
            setShowOTPView(true)
          }
        }

        _isMounted.current && setSendingCode(false)
      })
    }
  }

  const redirectAfterLogin = (user) => {
    if(queryParams?.redirect) {
      if(queryParams.redirect === '/sell') {
        const { categoryId } = queryParams
        // from clicking "JUAL" button in home screen
        const { store } = user
        if(store) {
          if(categoryId)
            history.replace(`/new/item/${categoryId}`)
          else
            history.replace(`/ad.account/${store.id}?selectCategory=1`)
        } else {
          history.replace('/new/ad.account')
        }
      } else {
        history.replace(queryParams.redirect)
      }
    } else {
      history.replace('/')
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
            redirectAfterLogin(payload.user)
            resetEnvironment()
          }
        }

        _isMounted.current && setLoading(false)
      })
    }
  }

  const loginWithEmail = () => {
    if(!loading) {
      setLoading(true)
      LoginWithEmail(environment, { email, password }, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          const { hasError, message } = payload.actionInfo
          alert(message)
          if(!hasError) {
            // do sth
            redirectAfterLogin(payload.user)
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

  useEffect(() => {
    if(me) {
      history.replace('/')
    }
  }, [me, history])

  if(me) return null

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%'
    }}>
      <div style={{
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30
      }}>
        <ButtonBase
          component={Link}
          href='/'
          disableRipple
        >
          <img
            alt="marketx-logo"
            src={Logo}
            style={{
              height: 25
            }}
          />
        </ButtonBase>

        <h1 style={{
          marginTop: 30,
          marginBottom: 10
        }}>Masuk ke {App.name}</h1>

        {useEmail ?
        <>
          <TextField
            variant="outlined"
            label="Email"
            fullWidth
            disabled={loading}
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
            onChange={(e) => setEmail(e.target.value.trim())}
            value={email}
            type="email"
          />

          <TextField
            variant="outlined"
            label="Kata Sandi"
            fullWidth
            disabled={loading}
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
            onChange={(e) => setPassword(e.target.value.trim())}
            value={password}
            type="password"
          />

          <div style={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
            <ButtonBase 
              component={Link}
              href={'/forgot-password'} 
              style={{ color: Color.link }}
            >
              <span style={{ fontSize: 12 }}>Lupa kata sandi</span>
            </ButtonBase>
          </div>

          <Button
            label="Masuk"
            thick
            style={{
              marginTop: 20,
              marginBottom: 10
            }}
            fullWidth
            onClick={loginWithEmail}
            loading={loading}
            disabled={!isEmail(email) || password.length === 0}
          />
        </>
        :
        <>
          <TextField
            variant="outlined"
            label="Mobile Number"
            fullWidth
            disabled={loading || sendingCode}
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
            onChange={handleChange}
            value={mobileNumber}
            placeholder="Ex: 082322343005"
            inputProps={{
              pattern: "[0-9]*",
              type: "text",
              inputMode: "numeric"
            }}
          />

          <Button
            label="Masuk"
            thick
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
            fullWidth
            onClick={sendOtpCode}
            loading={sendingCode || loading}
            disabled={mobileNumber.length < 12}
          />
        </>
        }
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: 20
        }}>
          <ButtonBase
            component={Link}
            href={queryParams?.redirect ? `/register?redirect=${queryParams.redirect}` : '/register'} 
            style={{ color: Color.link }}
          >
            <span>Daftar akun baru</span>
          </ButtonBase>
        </div>
        
      </div>

      <div style={{
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 20,
        lineHeight: '20px',
        textAlign: 'center'
      }}>
        <p style={{
          fontSize: 'small'
        }}>
          {'Saya setuju dengan '}
          <ButtonBase 
            style={{ 
              color: Color.primary,
              verticalAlign: 'baseline'
            }} 
            component={Link} 
            href='/terms-of-service'
          >
            Ketentuan Layanan
          </ButtonBase> 
          {' dan '}
          <ButtonBase 
            style={{ 
              color: Color.primary,
              verticalAlign: 'baseline'
            }} 
            component={Link} 
            href='/privacy-policy'
          >
            Kebijakan Privasi
          </ButtonBase> 
          {` ${App.name}`}
        </p>
      </div>

      {showOTPView &&
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
          expiry={expiry}
          loading={false}
          mobileNumber={mobileNumber}
          resend={sendOtpCode}
          sending={sendingCode}
          onClose={() => setShowOTPView(false)}
        />
      </div>
      }
    </div>
  )
}

export default createFragmentContainer(Component, {
  me: graphql`
    fragment LoginScreen_me on User {
      id
    }
  `
})