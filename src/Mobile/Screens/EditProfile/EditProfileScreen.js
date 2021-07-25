import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR, DIVIDER_COLOR } from '../../Constants'
import Color from '../../Constants/Color'
import { Button, TextField } from '@material-ui/core'
import { IoChevronBackSharp } from 'react-icons/io5'
import useAppContext from '../../hooks/useAppContext'
import OTPView from '../../Components/OTPView'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import { useState, useEffect, useRef } from 'react'
import Validator from '../../../helpers/validator'
import { isEmail } from 'validator'
import MobileNumberChecker from '../../../helpers/MobileNumberChecker'
import { useDebounce } from 'use-debounce'
import LogoutButton from '../../Components/LogoutButton'

const Component = props => {
  const _isMounted = useRef(true)
  const { me } = props
  const myCurrentMobileNumber = me?.mobileNumber
  const { history, queryParams, environment } = useAppContext()
  const [name, setName] = useState(me?.name)
  const [mobileNumber, setMobileNumber] = useState(myCurrentMobileNumber)
  const [email, setEmail] = useState(me?.email || '')
  const [mobileNumberDebounced] = useDebounce(mobileNumber, 500)
  const [validation, setValidation] = useState({ isValid: false })
  const [numberExistance, setNumberExistance] = useState(null)

  const _setName = (e) => {
    setName(e.target.value.trimLeft())
  }

  const _setMobileNumber = (e) => {
    const allowedChars = '1234567890'
    const { value } = e.target
    if(value.length && !value.startsWith('0')) return
    if(value.length && !allowedChars.includes(value[value.length - 1])) return
    setMobileNumber(value)
  }

  const _setEmail = (e) => {
    setEmail(e.target.value.trim())
  }

  const showOTPModal = () => {
    history.push(`/profile?mobileNumber=${'082322343005'}`)
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
      ...(email?.length > 0 ? [{
        field: 'email',
        method: isEmail,
        validWhen: true,
        message: 'Email is not valid.'
      }] : [])
    ])

    const validation = validator.validate({ name, email, mobileNumber })
    setValidation(validation)
    return validation.isValid && numberExistance?.exists !== true
  }

  const save = () => {
    if(isValid()) {

    }
  }

  useEffect(() => {
    return () => _isMounted.current = false
  }, [])

  useEffect(() => {
    if(mobileNumberDebounced?.length < 12) {
      setNumberExistance(null)
    } else {
      if(myCurrentMobileNumber && mobileNumberDebounced !== myCurrentMobileNumber) {
        const checker = new MobileNumberChecker(environment)
        checker.checkExistance(mobileNumberDebounced, (data) => {
          setNumberExistance(data)
        })
      } else {
        setNumberExistance(null)
      }
    }
  }, [mobileNumberDebounced, myCurrentMobileNumber, environment])

  if(!me) return null
  return (
    <div>
      <div style={{
        height: HEADER_HEIGHT,
        backgroundColor: 'white',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
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
        <div style={{ marginRight: 15, zIndex: 1 }}>
          <LogoutButton/>
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
          }}>Profile</h1>
        </div>
      </div>
      <div style={{
        marginTop: HEADER_HEIGHT
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '25px 0'
        }}>
          <div style={{
            height: 100,
            width: 100,
            borderRadius: '50%',
            backgroundColor: Color.primary,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            // marginBottom: 15
          }}>
            <span style={{ textTransform: 'uppercase', fontWeight: 500, fontSize: 40, color: 'white' }}>{'S'}</span>
          </div>

          {/* <Button
            variant="contained"
            disableElevation
            style={{ margin: 0 }}
          >
            Edit
          </Button> */}
          
        </div>

        <div style={{
          padding: '20px 20px',
          paddingTop: 0
        }}>
          <TextField
            // variant="filled"
            label="Name"
            fullWidth
            style={{
              marginBottom: 25
            }}
            value={name}
            onChange={_setName}
            error={validation?.name?.isInvalid}
            helperText={validation?.name?.message}
          />

          <TextField
            // variant="filled"
            label="Mobile Number"
            fullWidth
            style={{
              marginBottom: 25
            }}
            value={mobileNumber}
            onChange={_setMobileNumber}
            type="tel"
            placeholder="Ex: 082322343005"
            error={numberExistance?.exists || validation?.mobileNumber?.isInvalid}
            helperText={numberExistance?.exists ? 'This number has already been registered.' : validation?.mobileNumber?.message}
          />

          <TextField
            // variant="filled"
            label="Email"
            fullWidth
            style={{
              marginBottom: 25
            }}
            value={email}
            onChange={_setEmail}
            type="email"
            error={validation?.email?.isInvalid}
            helperText={validation?.email?.message}
          />

          <Button
            disableElevation
            variant="contained"
            fullWidth
            style={{ textTransform: 'none' }}
            onClick={save}
          >
            Save
          </Button>
        </div>
      </div>

      {queryParams.mobileNumber &&
      <div style={{
        position: 'absolute',
        backgroundColor: 'white',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
      }}>
        <OTPView
          onSubmit={() => alert('Aduh')}
          loading={false}
          mobileNumber={queryParams.mobileNumber}
        />
      </div>
      }
    </div>
  )
}

export default createFragmentContainer(Component, {
  me: graphql`
    fragment EditProfileScreen_me on User {
      id,
      name,
      mobileNumber,
      profilePicture {
        url
      }
    }
  `
})