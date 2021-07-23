import { LOGO_URL } from '../../Constants'
import { TextField, Button } from '@material-ui/core'
import { useState } from 'react'

const Component = props => {
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleChange = (e) => {
    const allowedChars = '1234567890'
    const { value } = e.target
    if(value.length && !value.startsWith('0')) return
    if(value.length && !allowedChars.includes(value[value.length - 1])) return
    setPhoneNumber(value)
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
      }}>Log in to RentX {phoneNumber}</h1>

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
      >
        Log in
      </Button>
      
    </div>
  )
}

export default Component