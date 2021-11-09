import { LOGO_URL, PASSWORD_MAX_LENGTH } from '../../Constants'
import Color from '../../Constants/Color'
import { TextField, InputAdornment, ButtonBase } from '@material-ui/core'
import { useState, useRef, useEffect } from 'react'
import useAppContext from '../../hooks/useAppContext'
import SendOtpCode from '../../../mutations/SendOtpCode'
import Validator from '../../../helpers/validator'
import MobileNumberChecker from '../../../helpers/MobileNumberChecker'
import EmailChecker from '../../../helpers/EmailChecker'
import { useDebounce } from 'use-debounce'
import OTPView from '../../Components/OTPView'
import Register from '../../../mutations/Register'
import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import clearNonNumericChars from '../../../helpers/cleanNonNumericChars'
import Button from '../../Components/Button'
import { isEmail } from 'validator'
import SendVerificationCode from '../../../mutations/SendVerificationCode'
import RegisterWithEmail from '../../../mutations/RegisterWithEmail'
import Link from '../../Components/Link'
import App from '../../../app.json'

const useEmail = true
const emailAlreadyRegisteredErrorMessage = 'Email ini sudah terdaftar di sistem kami.'

const Component = props => {
  const { me } = props
  const _isMounted = useRef(true)
  const { history, environment, resetEnvironment, queryParams } = useAppContext()
  const [mobileNumber, setMobileNumber] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')
  const [emailVerificationCode, setEmailVerificationCode] = useState('')
  const [sendingEmailVerificationCode, setSendingEmailVerificationCode] = useState(false)
  const [loading, setLoading] = useState(false)
  const [emailDebounced] = useDebounce(email, 500)
  const [mobileNumberDebounced] = useDebounce(mobileNumber, 500)
  const [validation, setValidation] = useState({ isValid: false })
  const [numberExistance, setNumberExistance] = useState(null)
  const [emailExistance, setEmailExistance] = useState(null)
  const [sendingCode, setSendingCode] = useState(false)
  const [expiry, setExpiry] = useState(null)
  const [showOTPView, setShowOTPView] = useState(false)

  const handleChange = (e) => {
    const allowedChars = '1234567890'
    const { value } = e.target
    if(value.length && !value.startsWith('0')) return
    if(value.length && !allowedChars.includes(value[value.length - 1])) return
    setMobileNumber(value)
  }

  const setFullname = (e) => {
    const { value } = e.target
    setName(value.trimLeft())
  }

  const isValid = () => {
    const validator = new Validator(useEmail ? [
      {
        field: 'name',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Fill in your name.'
      },
      {
        field: 'name',
        method: v => v.trim().length > 1,
        validWhen: true,
        message: 'Min 2 chars.'
      },
      {
        field: 'email',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Fill in your email.'
      },
      {
        field: 'email',
        method: v => isEmail(v),
        validWhen: true,
        message: 'Enter a valid email.'
      },
      {
        field: 'email',
        method: () => emailExistance?.exists === true,
        validWhen: false,
        message: emailAlreadyRegisteredErrorMessage
      },
      {
        field: 'password',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Fill in your password.'
      },
      {
        field: 'password',
        method: Validator.isStrongPassword,
        validWhen: true,
        message: 'Password must contain at least 1 lower case, 1 upper case, 1 number, min 6 characters and max 30 characters.'
      },
      {
        field: 'repassword',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Fill in your password confirmation.'
      },
      {
        field: 'repassword',
        method: () => Validator.isEmpty(password),
        validWhen: false,
        message: 'Fill in your password first.'
      },
      {
        field: 'repassword',
        method: v => v === password,
        validWhen: true,
        message: 'Must match your password.'
      },
      {
        field: 'emailVerificationCode',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Fill in with the code sent to your email.'
      },
    ] : [
      {
        field: 'name',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Fill in your name.'
      },
      {
        field: 'mobileNumber',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Fill in your mobile number.'
      },
    ])

    const validation = validator.validate(useEmail ? {
      name,
      email,
      password,
      repassword,
      emailVerificationCode
    } : { name, mobileNumber })
    setValidation(validation)
    return validation.isValid
  }

  const sendOtpCode = () => {
    if(isValid() > 0 && !sendingCode) {
      setSendingCode(true)
      SendOtpCode(environment, { mobileNumber, action: 'register' }, (payload, error) => {
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

  const redirectAfterLogin = () => {
    if(queryParams?.redirect) {
      if(queryParams.redirect === '/sell') {
        history.replace('/new/ad.account')
      } else {
        history.replace(queryParams.redirect)
      }
    } else {
      history.replace('/')
    }
  }

  const register = (code) => {
    if(!loading) {
      setLoading(true)
      Register(environment, { name, loginId: mobileNumber, password: code }, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          const { hasError, message } = payload.actionInfo
          alert(message)
          if(!hasError) {
            // do sth
            redirectAfterLogin()
            resetEnvironment()
          }
        }

        _isMounted.current && setLoading(false)
      })
    }
  }

  const registerWithEmail = () => {
    if(isValid() && !loading) {
      const variables = {
        name,
        email,
        password,
        verificationCode: emailVerificationCode
      }
      setLoading(true)
      RegisterWithEmail(environment, variables, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          const { hasError, message } = payload.actionInfo
          alert(message)
          if(!hasError) {
            // do sth
            redirectAfterLogin()
            resetEnvironment()
          }
        }

        _isMounted.current && setLoading(false)
      })
    }
  }

  const sendEmailVerificationCode = () => {
    if(emailExistance.exists && emailExistance.email === email) {
      setValidation(prev => {
        const copy = { ...prev }
        copy.email = {
          isInvalid: true,
          message: emailAlreadyRegisteredErrorMessage
        }
        return copy
      })

      alert(emailAlreadyRegisteredErrorMessage)
    } else if(!sendingEmailVerificationCode) {
      setValidation(prev => {
        const copy = { ...prev }
        delete copy.email
        return copy
      })
      setSendingEmailVerificationCode(true)
      SendVerificationCode(environment, { id: email }, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          const { message } = payload.actionInfo
          alert(message)
        }

        _isMounted.current && setSendingEmailVerificationCode(false)
      })
    }
  }

  useEffect(() => {
    return () => _isMounted.current = false
  }, [])

  useEffect(() => {
    if(mobileNumberDebounced.length < 12) {
      setNumberExistance(null)
    } else {
      const checker = new MobileNumberChecker(environment)
      checker.checkExistance(mobileNumberDebounced, (data) => {
        setNumberExistance(data)
      })
    }
  }, [mobileNumberDebounced, environment])

  useEffect(() => {
    if(!isEmail(emailDebounced)) {
      setEmailExistance(null)
    } else {
      const checker = new EmailChecker(environment)
      checker.checkExistance(emailDebounced, (data) => {
        setEmailExistance(data)
      })
    }
  }, [emailDebounced, environment])

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
            alt="twitter"
            src={LOGO_URL}
            style={{
              height: 38,
              width: 38
            }}
          />
        </ButtonBase>

        <h1 style={{
          marginTop: 30,
          marginBottom: 10
        }}>Daftar akun baru</h1>

        {useEmail ?
        <>
          <TextField
            variant="outlined"
            label="Nama Lengkap"
            fullWidth
            inputProps={{
              maxLength: 50
            }}
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
            onChange={setFullname}
            value={name}
            disabled={loading}
            error={validation?.name?.isInvalid}
            helperText={validation?.name?.message}
          />

          <TextField
            variant="outlined"
            label="Email"
            fullWidth
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
            onChange={(e) => setEmail(e.target.value.trim())}
            value={email}
            disabled={loading}
            error={validation?.email?.isInvalid}
            helperText={validation?.email?.message}
            type="email"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Button
                    label="Kirim Kode"
                    disabled={!isEmail(email) || loading}
                    loading={sendingEmailVerificationCode}
                    onClick={sendEmailVerificationCode}
                  />
                </InputAdornment>
              )
            }}
          />

          <TextField
            variant="outlined"
            label="Kata Sandi"
            fullWidth
            inputProps={{
              maxLength: PASSWORD_MAX_LENGTH
            }}
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
            onChange={(e) => setPassword(e.target.value.trim())}
            value={password}
            disabled={loading}
            error={validation?.password?.isInvalid}
            helperText={validation?.password?.message}
            type="password"
          />

          <TextField
            variant="outlined"
            label="Konfirmasi Kata Sandi"
            fullWidth
            inputProps={{
              maxLength: PASSWORD_MAX_LENGTH
            }}
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
            onChange={(e) => setRepassword(e.target.value.trim())}
            value={repassword}
            disabled={loading}
            error={validation?.repassword?.isInvalid}
            helperText={validation?.repassword?.message}
            type="password"
          />

          <TextField
            variant="outlined"
            label="Kode Verifikasi Email"
            fullWidth
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
            onChange={(e) => setEmailVerificationCode(clearNonNumericChars(e.target.value.trim()))}
            value={emailVerificationCode}
            disabled={loading}
            error={validation?.emailVerificationCode?.isInvalid}
            helperText={validation?.emailVerificationCode?.message}
            inputProps={{
              pattern: "[0-9]*",
              type: "text",
              inputMode: "numeric",
              maxLength: 10
            }}
          />

          <Button
            label="Daftar"
            thick
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
            fullWidth
            loading={loading}
            onClick={registerWithEmail}
          />
        </>
        :
        <>
          <TextField
            variant="outlined"
            label="Full Name"
            fullWidth
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
            onChange={setFullname}
            value={name}
            disabled={loading || sendingCode}
            error={validation?.name?.isInvalid}
            helperText={validation?.name?.message}
          />

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
            disabled={loading || sendingCode}
            placeholder="Ex: 082322343005"
            inputProps={{
              pattern: "[0-9]*",
              type: "text",
              inputMode: "numeric"
            }}
            error={numberExistance?.exists || validation?.mobileNumber?.isInvalid}
            helperText={numberExistance?.exists ? 'This number has already been registered.' : validation?.mobileNumber?.message}
          />

          <Button
            label="Daftar"
            thick
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
            fullWidth
            loading={sendingCode || loading}
            onClick={sendOtpCode}
          />
        </>
        }
        
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
            style={{ color: Color.primary }} 
            component={Link} 
            href='/terms-of-service'
          >
            Ketentuan Layanan
          </ButtonBase> 
          {' dan '}
          <ButtonBase 
            style={{ color: Color.primary }} 
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
          onSubmit={register}
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
    fragment RegisterScreen_me on User {
      id
    }
  `
})