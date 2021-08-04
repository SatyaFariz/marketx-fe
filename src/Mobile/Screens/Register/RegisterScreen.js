import { LOGO_URL } from '../../Constants'
import { TextField, Button } from '@material-ui/core'
import { useState, useRef, useEffect } from 'react'
import useAppContext from '../../hooks/useAppContext'
import SendOtpCode from '../../../mutations/SendOtpCode'
import Link from '../../Components/Link'
import Color from '../../Constants/Color'
import Validator from '../../../helpers/validator'
import MobileNumberChecker from '../../../helpers/MobileNumberChecker'
import { useDebounce } from 'use-debounce'
import OTPView from '../../Components/OTPView'

const Component = props => {
  const _isMounted = useRef(true)
  const { history, queryParams, environment } = useAppContext()
  const [mobileNumber, setMobileNumber] = useState(queryParams?.mobileNumber || '')
  const [name, setName] = useState(queryParams?.name || '')
  const [loading, setLoading] = useState(false)
  const [mobileNumberDebounced] = useDebounce(mobileNumber, 500)
  const [validation, setValidation] = useState({ isValid: false })
  const [numberExistance, setNumberExistance] = useState(null)
  const [sendingCode, setSendingCode] = useState(false)
  const [expiry, setExpiry] = useState(null)

  const handleChange = (e) => {
    const allowedChars = '1234567890'
    const { value } = e.target
    if(value.length && !value.startsWith('0')) return
    if(value.length && !allowedChars.includes(value[value.length - 1])) return
    setMobileNumber(value)
  }

  const setFullname = (e) => {
    const { value } = e.target
    setName(value)
  }

  const isValid = () => {
    const validator = new Validator([
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

    const validation = validator.validate({ name, mobileNumber })
    setValidation(validation)
    return validation.isValid && numberExistance?.exists !== true
  }

  const sendOtpCode = () => {
    if(isValid() > 0 && !loading) {
      setLoading(true)
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
            if(!queryParams.otp)
              history.push(`/register?otp=1`)
          }
        }

        _isMounted.current && setLoading(false)
      })
    }
  }

  const register = () => {
    
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
        }}>Create a new account</h1>

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
          Create Account
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
          onSubmit={register}
          expiry={expiry}
          loading={false}
          mobileNumber={mobileNumber}
          resend={sendOtpCode}
          sending={sendingCode}
        />
      </div>
      }
    </div>
  )
}

export default Component