import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR, DIVIDER_COLOR } from '../../Constants'
import { TextField } from '@material-ui/core'
import useAppContext from '../../hooks/useAppContext'
import OTPView from '../../Components/OTPView'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import { useState, useEffect, useRef } from 'react'
import Validator from '../../../helpers/validator'
import CameraIcon from '../../Components/CameraIcon'
import MobileNumberChecker from '../../../helpers/MobileNumberChecker'
import { useDebounce } from 'use-debounce'
import LogoutButton from '../../Components/LogoutButton'
import { useDropzone } from 'react-dropzone'
import { fromImage } from 'imtool'
import SendOtpCode from '../../../mutations/SendOtpCode'
import UpdateProfile from '../../../mutations/UpdateProfile'
import BackButton from '../../Components/BackButton'
import Button from '../../Components/Button'

const megabytes = 1048576

const Component = props => {
  const _isMounted = useRef(true)
  const { me } = props
  const myCurrentMobileNumber = me?.mobileNumber
  const profilePictureUrl = me?.profilePicture?.url
  const [url, setUrl] = useState(profilePictureUrl)
  const { environment } = useAppContext()
  const [name, setName] = useState(me?.name)
  const [mobileNumber, setMobileNumber] = useState(myCurrentMobileNumber)
  const [mobileNumberDebounced] = useDebounce(mobileNumber, 500)
  const [validation, setValidation] = useState({ isValid: false })
  const [numberExistance, setNumberExistance] = useState(null)
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState(null)
  const [sendingOtpCode, setSendingOtpCode] = useState(false)
  const [expiry, setExpiry] = useState(null)
  const [showOTPView, setShowOTPView] = useState(false)

  const { getRootProps, getInputProps } = useDropzone({
    // Disable click and keydown behavior
    accept: 'image/jpeg',
    disabled: loading,
    maxSize: 6 * megabytes,
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      if(acceptedFiles.length > 0) {
        const file = acceptedFiles[0]
        const tool = await fromImage(file)
        const image = await tool.quality(0.4).toFile(file.name)
        image.preview = URL.createObjectURL(image)
        setFile(image)
      }
    },
    onDropRejected: () => console.log('Rejected')
  })

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

  const update = (otpCode) => {
    if(!loading) {
      const input = {
        name,
        mobileNumber
      }
      
      setLoading(true)
      UpdateProfile(environment, { otpCode, input }, file, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          const { hasError, message } = payload.actionInfo
          alert(message)
          if(hasError) {
            //
          } else {
            _isMounted.current && setShowOTPView(false)
          }
        }

        _isMounted.current && setLoading(false)
      })
    }
  }

  const sendOtpCode = () => {
    if(!sendingOtpCode) {
      setSendingOtpCode(true)
      SendOtpCode(environment, { mobileNumber, action: 'edit_profile' }, (payload, error) => {
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

        _isMounted.current && setSendingOtpCode(false)
      })
    }
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
      }
    ])

    const validation = validator.validate({ name, mobileNumber })
    setValidation(validation)
    return validation.isValid && numberExistance?.exists !== true
  }

  const isMobileNumberClean = () => {
    return mobileNumber.trim() === me.mobileNumber.trim()
  }

  const isClean = () => {
    return (
      file === null &&
      name.trim() === me.name.trim() &&
      isMobileNumberClean()
    )
  }

  const save = () => {
    if(!loading && isValid() && !isClean()) {
      if(!isMobileNumberClean()) {
        sendOtpCode()
      } else {
        update(null)
      }
    }
  }

  useEffect(() => {
    return () => _isMounted.current = false
  }, [])

  useEffect(() => {
    if(profilePictureUrl)
      setUrl(profilePictureUrl)
  }, [profilePictureUrl])

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
        <BackButton/>
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
            border: `1px solid ${DIVIDER_COLOR}`,
            backgroundColor: me.profilePicture ? undefined : '#b1b6c9',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundImage: file ? `url("${file.preview}")` : (url ? `url("${url}")` : undefined)
          }}
          {...getRootProps({className: 'dropzone'})}
          >
            <input {...getInputProps()} />
            <CameraIcon/>
          </div>
          
        </div>

        <div style={{
          padding: '20px 20px',
          paddingTop: 0
        }}>
          <TextField
            variant="outlined"
            label="Name"
            fullWidth
            disabled={sendingOtpCode || loading}
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
            value={name}
            onChange={_setName}
            error={validation?.name?.isInvalid}
            helperText={validation?.name?.message}
          />

          <TextField
            variant="outlined"
            label="Mobile Number"
            fullWidth
            disabled={sendingOtpCode || loading}
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
            value={mobileNumber}
            onChange={_setMobileNumber}
            inputProps={{
              pattern: "[0-9]*",
              type: "text",
              inputMode: "numeric"
            }}
            placeholder="Ex: 082322343005"
            error={numberExistance?.exists || validation?.mobileNumber?.isInvalid}
            helperText={numberExistance?.exists ? 'This number has already been registered.' : validation?.mobileNumber?.message}
          />

          <Button
            label="Simpan"
            thick
            fullWidth
            style={{
              marginTop: 10
            }}
            onClick={save}
            loading={loading || sendingOtpCode}
          />
        </div>
      </div>

      {showOTPView &&
      <div style={{
        position: 'absolute',
        backgroundColor: 'white',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: 9999
      }}>
        <OTPView
          onSubmit={update}
          expiry={expiry}
          loading={false}
          mobileNumber={mobileNumber}
          resend={sendOtpCode}
          sending={sendingOtpCode}
          onClose={() => setShowOTPView(false)}
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