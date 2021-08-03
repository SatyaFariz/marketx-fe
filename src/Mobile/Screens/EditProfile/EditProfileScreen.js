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
import CameraIcon from '../../Components/CameraIcon'
import MobileNumberChecker from '../../../helpers/MobileNumberChecker'
import { useDebounce } from 'use-debounce'
import LogoutButton from '../../Components/LogoutButton'
import { useDropzone } from 'react-dropzone'
import { fromImage } from 'imtool'

const megabytes = 1048576

const Component = props => {
  const _isMounted = useRef(true)
  const { me } = props
  const myCurrentMobileNumber = me?.mobileNumber
  const { history, queryParams, environment } = useAppContext()
  const [name, setName] = useState(me?.name)
  const [mobileNumber, setMobileNumber] = useState(myCurrentMobileNumber)
  const [mobileNumberDebounced] = useDebounce(mobileNumber, 500)
  const [validation, setValidation] = useState({ isValid: false })
  const [numberExistance, setNumberExistance] = useState(null)
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState(null)

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
      }
    ])

    const validation = validator.validate({ name, mobileNumber })
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
            backgroundColor: me.profilePicture ? undefined : '#b1b6c9',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundImage: file ? `url("${file.preview}")` : (me.profilePicture ? `url("${me.profilePicture.url}")` : undefined)
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
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
            value={mobileNumber}
            onChange={_setMobileNumber}
            type="tel"
            placeholder="Ex: 082322343005"
            error={numberExistance?.exists || validation?.mobileNumber?.isInvalid}
            helperText={numberExistance?.exists ? 'This number has already been registered.' : validation?.mobileNumber?.message}
          />

          <Button
            disableElevation
            variant="contained"
            fullWidth
            style={{ 
              textTransform: 'none',
              marginTop: 10
            }}
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