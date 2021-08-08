import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR } from '../../Constants'
import { TextField, Button, InputAdornment } from '@material-ui/core'
import { useState, useRef, useEffect } from 'react'
import useAppContext from '../../hooks/useAppContext'
import { IoChevronBackSharp } from 'react-icons/io5'
import CreateStore from '../../../mutations/CreateStore'
import Validator from '../../../helpers/validator'
import BackButton from '../../Components/BackButton'
import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { Autocomplete } from '@material-ui/lab'
import AdministrativeAreaLoader from '../../../helpers/AdministrativeAreasLoader'

const Component = props => {
  const { provinces } = props
  const _isMounted = useRef(true)
  const { history, environment } = useAppContext()
  const areasLoader = new AdministrativeAreaLoader(environment)
  const [storeName, setStoreName] = useState('')
  const [whatsappNumber, setWhatsappNumber] = useState('')
  const [loading, setLoading] = useState(false)
  const [province, setProvince] = useState(null)
  const [city, setCity] = useState(null)
  const [district, setDistrict] = useState(null)
  const [fullAddress, setFullAddress] = useState('')
  const [cities, setCities] = useState([])
  const [districts, setDistricts] = useState([])
  const [loadingCities, setLoadingCities] = useState(false)
  const [loadingDistricts, setLoadingDistricts] = useState(false)
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
      },
      {
        field: 'province',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'This field is required.'
      },
      {
        field: 'city',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'This field is required.'
      },
      {
        field: 'district',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'This field is required.'
      },
      {
        field: 'fullAddress',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'This field is required.'
      },
    ])

    const validation = validator.validate({ storeName, whatsappNumber, province, city, district, fullAddress })
    setValidation(validation)
    return validation.isValid
  }

  const createStore = () => {
    if(isValid() && !loading) {
      const variables = {
        name: storeName,
        whatsappNumber,
        address: {
          provinceId: province.administrativeAreaId,
          cityId: city.administrativeAreaId,
          districtId: district.administrativeAreaId,
          fullAddress
        }
      }
      setLoading(true)
      CreateStore(environment, variables, (payload, error) => {
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

  useEffect(() => {
    if(province) {
      setCity(null)
      setDistrict(null)
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
      setDistrict(null)
      setLoadingDistricts(true)
      setDistricts([])
      areasLoader.load(city.administrativeAreaId, data => {
        setDistricts(data)
        setLoadingDistricts(false)
      })
    }
  }, [city])

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
        borderBottom: `1px solid ${HEADER_BORDER_BOTTOM_COLOR}`,
        zIndex: 9
      }}>
        <BackButton/>
        
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

export default createFragmentContainer(Component, {
  provinces: graphql`
    fragment CreateStoreScreen_provinces on AdministrativeArea @relay(plural: true) {
      administrativeAreaId,
      name
    }
  `
})