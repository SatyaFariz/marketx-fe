import { LOGO_URL } from '../../Constants'
import { TextField, Button } from '@material-ui/core'
import { useState } from 'react'
import useAppContext from '../../hooks/useAppContext'
import SendOtpCode from '../../../mutations/SendOtpCode'

const Component = props => {
  const { history, queryParams, environment } = useAppContext()
  const [phoneNumber, setPhoneNumber] = useState(queryParams?.phoneNumber || '')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const allowedChars = '1234567890'
    const { value } = e.target
    if(value.length && !value.startsWith('0')) return
    if(value.length && !allowedChars.includes(value[value.length - 1])) return
    setPhoneNumber(value)
  }

  const proceed = () => {
    const number = phoneNumber
    if(number.length > 0 && !loading) {
      setLoading(true)
      history.replace(`/login?phoneNumber=${number}`)
      SendOtpCode(environment, { phoneNumber: number }, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          const { hasError, message } = payload
          if(hasError) {
            alert(message)
          } else {
            history.push(`/otp?phoneNumber${number}`)
          }
        }

        setLoading(false)
      })
    }
  }

  return (
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
        label="Phone Number"
        fullWidth
        style={{
          marginTop: 10,
          marginBottom: 10
        }}
        onChange={handleChange}
        value={phoneNumber}
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
        onClick={proceed}
      >
        Log in
      </Button>
      
    </div>
  )
}

export default Component