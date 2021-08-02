import EditAddressView from '../../Components/EditAddressView'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR, DIVIDER_COLOR } from '../../Constants'
import { TextField, Button, InputAdornment } from '@material-ui/core'
import { useState, useRef, useEffect } from 'react'
import useAppContext from '../../hooks/useAppContext'
import { IoChevronBackSharp } from 'react-icons/io5'
import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import Color from '../../Constants/Color'
import { useDropzone } from 'react-dropzone'
import { fromImage } from 'imtool'

const megabytes = 1048576

const CameraIcon = () => {
  return (
    <svg viewBox="0 0 24 24" fill="rgb(255, 255, 255)" style={{
      height: 21
    }}>
      <g>
        <path d="M19.708 22H4.292C3.028 22 2 20.972 2 19.708V7.375C2 6.11 3.028 5.083 4.292 5.083h2.146C7.633 3.17 9.722 2 12 2c2.277 0 4.367 1.17 5.562 3.083h2.146C20.972 5.083 22 6.11 22 7.375v12.333C22 20.972 20.972 22 19.708 22zM4.292 6.583c-.437 0-.792.355-.792.792v12.333c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V7.375c0-.437-.355-.792-.792-.792h-2.45c-.317.05-.632-.095-.782-.382-.88-1.665-2.594-2.7-4.476-2.7-1.883 0-3.598 1.035-4.476 2.702-.16.302-.502.46-.833.38H4.293z"/>
        <path d="M12 8.167c-2.68 0-4.86 2.18-4.86 4.86s2.18 4.86 4.86 4.86 4.86-2.18 4.86-4.86-2.18-4.86-4.86-4.86zm2 5.583h-1.25V15c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.25H10c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.25V11c0-.414.336-.75.75-.75s.75.336.75.75v1.25H14c.414 0 .75.336.75.75s-.336.75-.75.75z"/>
      </g>
    </svg>
  )
}

const Component = props => {
  const store = props.store
  const { history, queryParams } = useAppContext()
  const [name, setName] = useState(store.name)
  const [whatsappNumber, setWhatsappNumber] = useState(store.whatsappNumber)
  const [banner, setBanner] = useState(null)
  const [profilePicture, setProfilePicture] = useState(null)
  const [loading, setLoading] = useState(false)

  const { getRootProps: getRootProps1, getInputProps: getInputProps1 } = useDropzone({
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
        setBanner(image)
      }
    },
    onDropRejected: () => console.log('Rejected')
  })

  const { getRootProps: getRootProps2, getInputProps: getInputProps2 } = useDropzone({
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
        setProfilePicture(image)
      }
    },
    onDropRejected: () => console.log('Rejected')
  })

  const _setWhatsappNumber = (e) => {
    const allowedChars = '1234567890'
    const { value } = e.target
    if(value.length && !allowedChars.includes(value[value.length - 1])) return
    setWhatsappNumber(value)
  }

  if(false) {
    return (
      <EditAddressView store={store}/>
    )
  }

  return (
    <div style={{
      height: '100%'
    }}>
      <div style={{
        height: HEADER_HEIGHT,
        backgroundColor: 'white',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
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

        <Button
          disableElevation
          variant="contained"
          style={{ marginRight: 15 }}
        >
          Save
        </Button>
        
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
          }}>Edit Store</h1>
        </div>
      </div>

      <div style={{
        top: HEADER_HEIGHT,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
      }}>
        <div style={{
          maxHeight: 200,
          backgroundColor: 'rgb(207, 217, 222)',
          width: '100%',
          height: 127,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundImage: banner ? `url("${banner.preview}")` : undefined
        }}
        {...getRootProps1({className: 'dropzone'})}
        >
          <input {...getInputProps1()} />
          <CameraIcon/>
        </div>
        <div style={{
          paddingLeft: 15,
          paddingRight: 15,
          paddingBottom: 20
        }}>
          <div style={{
            height: 94,
            width: 94,
            backgroundColor: '#b1b6c9',
            marginTop: -42,
            borderRadius: '50%',
            borderWidth: 2,
            borderColor: 'white',
            borderStyle: 'solid',
            marginBottom: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundImage: profilePicture ? `url("${profilePicture.preview}")` : undefined
          }}
          {...getRootProps2({className: 'dropzone'})}
          >
            <input {...getInputProps2()} />
            <CameraIcon/>
          </div>
          
          <TextField
            variant="outlined"
            label="Store Name"
            value={name}
            onChange={e => setName(e.target.value.trimLeft())}
            fullWidth
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
            // error={validation?.name?.isInvalid}
            // helperText={validation?.name?.message}
          />

          <TextField
            variant="outlined"
            label="WhatsApp Number"
            value={whatsappNumber}
            onChange={_setWhatsappNumber}
            fullWidth
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Button
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
            // error={validation?.name?.isInvalid}
            // helperText={validation?.name?.message}
          />

          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 15,
            marginBottom: 10
          }}>
            <h3 style={{ margin: 0 }}>Address</h3>
            <span style={{ padding: '0 4px' }}>·</span>
            <span style={{ color: Color.link }}>Edit</span>
          </div>
          
          <span>{store.address.fullAddress}</span>
        </div>
      </div>
    </div>
  )
}

export default createFragmentContainer(Component, {
  store: graphql`
    fragment EditStoreScreen_store on Store {
      id,
      name,
      whatsappNumber,
      profilePicture {
        id,
        url
      },
      banner {
        id,
        url
      },
      address {
        fullAddress
      }
    }
  `
})