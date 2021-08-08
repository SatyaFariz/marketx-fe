import EditAddressView from '../../Components/EditAddressView'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR } from '../../Constants'
import { TextField, Button, InputAdornment } from '@material-ui/core'
import { useState, useRef, useEffect } from 'react'
import useAppContext from '../../hooks/useAppContext'
import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import Color from '../../Constants/Color'
import { useDropzone } from 'react-dropzone'
import { fromImage } from 'imtool'
import UpdateStore from '../../../mutations/UpdateStore'
import Validator from '../../../helpers/validator'
import CameraIcon from '../../Components/CameraIcon'
import BackButton from '../../Components/BackButton'
import { Autocomplete } from '@material-ui/lab'
import AdministrativeAreaLoader from '../../../helpers/AdministrativeAreasLoader'

const megabytes = 1048576

const Component = props => {
  const citiesFirstLoaded = useRef(true)
  const districtsFirstLoaded = useRef(true)
  const _isMounted = useRef(true)
  const store = props.store
  const { provinces } = props
  const { history, queryParams, environment } = useAppContext()
  const areasLoader = new AdministrativeAreaLoader(environment)
  const [name, setName] = useState(store.name)
  const [whatsappNumber, setWhatsappNumber] = useState(store.whatsappNumber)
  const [banner, setBanner] = useState(null)
  const [profilePicture, setProfilePicture] = useState(null)
  const [loading, setLoading] = useState(false)
  const [province, setProvince] = useState(store?.address?.province)
  const [city, setCity] = useState(store?.address.city)
  const [district, setDistrict] = useState(store?.address?.district)
  const [fullAddress, setFullAddress] = useState(store?.address?.fullAddress || '')
  const [cities, setCities] = useState([])
  const [districts, setDistricts] = useState([])
  const [loadingCities, setLoadingCities] = useState(false)
  const [loadingDistricts, setLoadingDistricts] = useState(false)
  const [validation, setValidation] = useState({ isValid: false })

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

  const isValid = () => {
    const validator = new Validator([
      {
        field: 'name',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'This field is required.'
      },
      {
        field: 'whatsappNumber',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'This field is required.'
      }
    ])

    const validation = validator.validate({ name, whatsappNumber })
    setValidation(validation)
    return validation.isValid
  }

  const isClean = () => {
    return (
      banner === null &&
      profilePicture === null &&
      store?.name?.trim() === name.trim() &&
      store?.whatsappNumber?.trim() === whatsappNumber.trim()
    )
  }

  const save = () => {
    if(!loading && isValid() && !isClean()) {
      setLoading(true)
      UpdateStore(environment, { id: store.id, name, whatsappNumber }, { banner, profilePicture }, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          const { hasError, message } = payload.actionInfo
          alert(message)
          if(!hasError) {
            // do sth
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
    if(province) {
      if(!citiesFirstLoaded.current) {
        setCity(null)
        setDistrict(null)
      } else {
        citiesFirstLoaded.current = false
      }
      setLoadingCities(true)
      setCities([])
      areasLoader.load(province.administrativeAreaId, data => {
        setCities(data)
        setLoadingCities(false)
      })
    }
  }, [province])

  useEffect(() => {
    if(city) {
      if(!districtsFirstLoaded) {
        setDistrict(null)
      } else {
        districtsFirstLoaded.current = false
      }
      setLoadingDistricts(true)
      setDistricts([])
      areasLoader.load(city.administrativeAreaId, data => {
        setDistricts(data)
        setLoadingDistricts(false)
      })
    }
  }, [city])

  if(queryParams.editAddress === '1') {
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
        <BackButton/>

        <Button
          disableElevation
          variant="contained"
          style={{ marginRight: 15, zIndex: 9999 }}
          onClick={save}
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
        bottom: 0,
        overflow: 'auto'
      }}>
        <div style={{
          maxHeight: 200,
          backgroundColor: store.banner ? undefined : 'rgb(207, 217, 222)',
          width: '100%',
          height: 127,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundImage: banner ? `url("${banner.preview}")` : (store.banner ? `url("${store.banner.url}")` : undefined)
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
            backgroundColor: store.profilePicture ? undefined : '#b1b6c9',
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
            backgroundImage: profilePicture ? `url("${profilePicture.preview}")` : (store.profilePicture ? `url("${store.profilePicture.url}")` : undefined)
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
            disabled={loading}
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
            error={validation?.name?.isInvalid}
            helperText={validation?.name?.message}
          />

          <TextField
            variant="outlined"
            label="WhatsApp Number"
            value={whatsappNumber}
            onChange={_setWhatsappNumber}
            fullWidth
            disabled={loading}
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
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

          <h3 style={{ margin: '10px 0'}}>Alamat</h3>

          <Autocomplete
            options={provinces}
            getOptionLabel={(option) => option.name}
            value={province}
            onChange={(_, value) => setProvince(value)}
            renderInput={(params) => 
              <TextField 
                {...params} 
                label="Provinsi"
                fullWidth
                disabled={loading} 
                variant="outlined"
                style={{
                  marginTop: 10,
                  marginBottom: 10
                }}
                error={validation.province?.isInvalid}
                helperText={validation.province?.message}
              />
            }
          />

          <Autocomplete
            disabled={Validator.isEmpty(province)}
            loading={loadingCities}
            options={cities}
            getOptionLabel={(option) => option.name}
            value={city}
            onChange={(_, value) => setCity(value)}
            renderInput={(params) => 
              <TextField 
                {...params} 
                label="Kota/Kabupaten"
                fullWidth
                disabled={loading} 
                variant="outlined"
                style={{
                  marginTop: 10,
                  marginBottom: 10
                }}
                error={validation.city?.isInvalid}
                helperText={validation.city?.message}
              />
            }
          />

          <Autocomplete
            disabled={Validator.isEmpty(province) || Validator.isEmpty(city)}
            loading={loadingDistricts}
            options={districts}
            getOptionLabel={(option) => option.name}
            value={district}
            onChange={(_, value) => setDistrict(value)}
            renderInput={(params) => 
              <TextField 
                {...params} 
                label="Kecamatan"
                fullWidth
                disabled={loading} 
                variant="outlined"
                style={{
                  marginTop: 10,
                  marginBottom: 10
                }}
                error={validation.district?.isInvalid}
                helperText={validation.district?.message}
              />
            }
          />

          <TextField
            variant="outlined"
            label="Alamat Lengkap"
            fullWidth
            disabled={loading}
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
            onChange={e => setFullAddress(e.target.value.trimLeft())}
            value={fullAddress}
            multiline
            rows="3"
            error={validation?.fullAddress?.isInvalid}
            helperText={validation?.fullAddress?.message}
          />

          {/* <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 15,
            marginBottom: 10
          }}>
            <h3 style={{ margin: 0 }}>Address</h3>
            <span style={{ padding: '0 4px' }}>·</span>
            <span 
              style={{ color: Color.link }}
              onClick={() => history.push(`/edit/store/${store.id}?editAddress=1`)}
            >Edit</span>
          </div> */}
          
          {/* <span style={{ fontSize: 14 }}>{store.address.fullAddress}</span> */}
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
        fullAddress,
        province {
          administrativeAreaId,
          name
        },
        city {
          administrativeAreaId,
          name
        },
        district {
          administrativeAreaId,
          name
        }
      },
      ...EditAddressView_store
    }
  `,
  provinces: graphql`
    fragment EditStoreScreen_provinces on AdministrativeArea @relay(plural: true) {
      administrativeAreaId,
      name
    }
  `
})