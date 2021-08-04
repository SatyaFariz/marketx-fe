import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR } from '../../Constants'
import { TextField, Button, InputAdornment } from '@material-ui/core'
import { useState, useRef, useEffect } from 'react'
import useAppContext from '../../hooks/useAppContext'
import { IoChevronBackSharp } from 'react-icons/io5'
import CreateStore from '../../../mutations/CreateStore'
import Validator from '../../../helpers/validator'

const Component = props => {
  const _isMounted = useRef(true)
  const { history, environment } = useAppContext()
  const [storeName, setStoreName] = useState('')
  const [whatsappNumber, setWhatsappNumber] = useState('')
  const [loading, setLoading] = useState(false)
  const [validation, setValidation] = useState({ isValid: false })

  const _setStoreName = (e) => {
    setStoreName(e.target.value.trimLeft())
  }

  const _setWhatsappNumber = (e) => {
    const allowedChars = '1234567890'
    const { value } = e.target
    if(value.length && !allowedChars.includes(value[value.length - 1])) return
    setWhatsappNumber(value)
  }

  const isValid = () => {
    const validator = new Validator([
      {
        field: 'storeName',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'This field is required.'
      },
      {
        field: 'whatsappNumber',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'This field is required.'
      },
      {
        field: 'whatsappNumber',
        method: (number) => number.length > 10,
        validWhen: true,
        message: 'This field must be more than 10 characters long.'
      }
    ])

    const validation = validator.validate({ storeName, whatsappNumber })
    setValidation(validation)
    return validation.isValid
  }

  const createStore = () => {
    if(isValid() && !loading) {
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
          disabled={loading}
          style={{
            marginTop: 10,
            marginBottom: 10
          }}
          onChange={_setStoreName}
          value={storeName}
          error={validation?.storeName?.isInvalid}
          helperText={validation?.storeName?.message}
        />

        <TextField
          variant="outlined"
          label="WhatsApp Number"
          fullWidth
          disabled={loading}
          style={{
            marginTop: 10,
            marginBottom: 10
          }}
          onChange={_setWhatsappNumber}
          value={whatsappNumber}
          placeholder="Ex: 6282322343005"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <Button
                  disabled={whatsappNumber.length < 10}
                  disableElevation
                  variant="contained"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}`)}
                >
                  Check
                </Button>
              </InputAdornment>
            )
          }}
          inputProps={{
            pattern: "[0-9]*",
            type: "text",
            inputMode: "numeric"
          }}
          error={validation?.whatsappNumber?.isInvalid}
          helperText={validation?.whatsappNumber?.message}
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
          onClick={createStore}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export default Component