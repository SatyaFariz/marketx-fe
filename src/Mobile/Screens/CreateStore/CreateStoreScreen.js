import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR, ADDRESS_MAX_LENGTH, AD_ACCOUNT_NAME_MAX_LENGTH, MOBILE_NUMBER_MAX_LENGTH, WHATSAPP_VERIFICATION_CODE_MAX_LENGTH } from '../../Constants'
import { TextField, InputAdornment, Switch } from '@material-ui/core'
import { useState, useRef, useEffect } from 'react'
import useAppContext from '../../hooks/useAppContext'
import useDisablePullToRefresh from '../../hooks/useDisablePullToRefresh'
import CreateStore from '../../../mutations/CreateStore'
import Validator from '../../../helpers/validator'
import BackButton from '../../Components/BackButton'
import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { Autocomplete } from '@material-ui/lab'
import AdministrativeAreaLoader from '../../../helpers/AdministrativeAreasLoader'
import Button from '../../Components/Button'
import NumberFormat from 'react-number-format'
import SendVerificationCode from '../../../mutations/SendVerificationCode'

const whatsappNumberNotRegisteredErrorMessage = 'Nomor ini tidak terdaftar di WhatsApp.'
const PHONE_MIN_CHAR_LEN = 10

const nameFieldHelperText = 'Ini adalah nama yang akan muncul di halaman iklan Anda.'

const Component = props => {
  useDisablePullToRefresh()
  const { provinces, me } = props
  const _isMounted = useRef(true)
  const shouldForceRedirect = useRef(true)
  const { history, environment, queryParams } = useAppContext()
  const areasLoader = useRef(new AdministrativeAreaLoader(environment))
  const [storeName, setStoreName] = useState('')
  const [whatsappNumber, setWhatsappNumber] = useState('')
  const [whatsappNumberStatus, setWhatsappNumberStatus] = useState(null)
  const [verificationCode, setVerificationCode] = useState('')
  const [isForBusiness, setIsForBusiness] = useState(false)
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
  const [sendingVerificationCode, setSendingVerificationCode] = useState(false)

  const sendVerificationCode = () => {
    if(!sendingVerificationCode) {
      if(whatsappNumberStatus?.number?.includes(whatsappNumber) && whatsappNumberStatus?.isNotRegistered) {
        setValidation(prev => {
          const copy = { ...prev }
          copy.whatsappNumber = {
            isInvalid: true,
            message: whatsappNumberNotRegisteredErrorMessage
          }
          return copy
        })
      } else {
        setValidation(prev => {
          const copy = { ...prev }
          delete copy.whatsappNumber 
          return copy
        })

        const variables = { 
          id: whatsappNumber, 
          action: 'verify_whatsapp_number' 
        }
        SendVerificationCode(environment, variables, (payload, error) => {
          if(error) {
            console.log(error)
          } else if(payload) {
            const {
              actionInfo: { message }, 
              emailOrNumber,
              isNumberNotRegisteredOnWhatsapp 
            } = payload

            setWhatsappNumberStatus({
              number: emailOrNumber,
              isNotRegistered: isNumberNotRegisteredOnWhatsapp
            })
            if(isNumberNotRegisteredOnWhatsapp) {
              setValidation(prev => {
                const copy = { ...prev }
                copy.whatsappNumber = {
                  isInvalid: true,
                  message: whatsappNumberNotRegisteredErrorMessage
                }
                return copy
              })
            }
            
            alert(message)
          }

          _isMounted.current && setSendingVerificationCode(false)
        })

        setSendingVerificationCode(true)
      }
    }
  }

  const isValid = () => {
    const validator = new Validator([
      {
        field: 'storeName',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Isi nama akun Anda.'
      },
      {
        field: 'storeName',
        method: v => v.trim().length > 1,
        validWhen: true,
        message: 'Nama akun minimal 2 karakter.'
      },
      {
        field: 'whatsappNumber',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Isi nomor WhatsApp Anda.'
      },
      {
        field: 'whatsappNumber',
        method: (number) => number.length > PHONE_MIN_CHAR_LEN,
        validWhen: true,
        message: `Nomor WhatsApp minimal ${PHONE_MIN_CHAR_LEN} karakter.`
      },
      {
        field: 'whatsappNumber',
        method: Validator.isValidPhoneNumber,
        validWhen: true,
        message: 'Nomor ini tidak valid.'
      },
      {
        field: 'whatsappNumber',
        method: (number) => {
          if(whatsappNumberStatus === null) return false
          
          return whatsappNumberStatus.number?.includes(number) && whatsappNumberStatus?.isNotRegistered
        },
        validWhen: false,
        message: whatsappNumberNotRegisteredErrorMessage
      },
      {
        field: 'verificationCode',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Isi dengan kode verifikasi yang kami kirim ke nomor WhatsApp Anda.'
      },
      {
        field: 'province',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Provinsi harus diisi.'
      },
      {
        field: 'city',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Kota/Kabupaten harus diisi.'
      },
      {
        field: 'district',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Kecamatan harus diisi.'
      },
      {
        field: 'fullAddress',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Alamat lengkap harus diisi.'
      },
    ])

    const validation = validator.validate({ 
      storeName, 
      whatsappNumber, 
      verificationCode,
      province, 
      city, 
      district, 
      fullAddress 
    })
    setValidation(validation)
    return validation.isValid
  }

  const createStore = () => {
    if(isValid() && !loading) {
      const variables = {
        name: storeName,
        whatsappNumber,
        whatsappVerificationCode: verificationCode,
        isForBusiness,
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
            if(queryParams?.redirect) {
              history.replace(queryParams.redirect)
            } else {
              history.replace(`/ad.account/${id}`)
            }
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
      areasLoader.current.load(province.administrativeAreaId, data => {
        setCities(data)
        setLoadingCities(false)
      })
    } else {
      setCity(null)
      setDistrict(null)
    }
  }, [province])

  useEffect(() => {
    if(city) {
      setDistrict(null)
      setLoadingDistricts(true)
      setDistricts([])
      areasLoader.current.load(city.administrativeAreaId, data => {
        setDistricts(data)
        setLoadingDistricts(false)
      })
    } else {
      setDistrict(null)
    }
  }, [city])

  useEffect(() => {
    if(shouldForceRedirect.current) {
      if(!me) {
        history.replace(`/login?redirect=/new/ad.account`)
      } else if(me.store) {
        history.replace(`/ad.account/${me.store.id}`)
      }
      shouldForceRedirect.current = false
    } else {
      shouldForceRedirect.current = false
    }
  }, [me, history])

  if(!me || me.store) return null

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
          }}>Akun Iklan</h1>
        </div>
      </div>

      <div style={{
        marginTop: HEADER_HEIGHT,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20
      }}>
        <TextField
          variant="outlined"
          label="Nama Akun"
          fullWidth
          disabled={loading}
          inputProps={{
            maxLength: AD_ACCOUNT_NAME_MAX_LENGTH
          }}
          style={{
            marginTop: 10,
            marginBottom: 10
          }}
          onChange={e => setStoreName(e.target.value.trimLeft())}
          value={storeName}
          error={validation?.storeName?.isInvalid}
          helperText={validation?.storeName?.message || nameFieldHelperText}
        />
        
        <NumberFormat
          customInput={TextField}
          variant="outlined"
          label="Nomor WhatsApp"
          fullWidth
          disabled={loading}
          onChange={(e) => setWhatsappNumber(e.target.value)}
          value={whatsappNumber}
          style={{
            marginTop: 10,
            marginBottom: 10
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <Button
                  label="Kirim Kode"
                  loading={sendingVerificationCode}
                  disabled={whatsappNumber.length < PHONE_MIN_CHAR_LEN || !Validator.isValidPhoneNumber(whatsappNumber)}
                  onClick={sendVerificationCode}
                />
              </InputAdornment>
            )
          }}
          inputProps={{
            pattern: "[0-9]*",
            type: "text",
            inputMode: "numeric",
            maxLength: MOBILE_NUMBER_MAX_LENGTH
          }}
          error={validation?.whatsappNumber?.isInvalid}
          helperText={validation?.whatsappNumber?.message}
          allowNegative={false}
          decimalSeparator={null}
          allowLeadingZeros
        />

        <NumberFormat
          customInput={TextField}
          variant="outlined"
          label="Kode Verifikasi"
          fullWidth
          disabled={loading}
          value={verificationCode}
          onValueChange={({ value }) => setVerificationCode(value)}
          style={{
            marginTop: 10,
            marginBottom: 10
          }}
          inputProps={{
            pattern: "[0-9]*",
            type: "text",
            inputMode: "numeric",
            maxLength: WHATSAPP_VERIFICATION_CODE_MAX_LENGTH
          }}
          error={validation?.verificationCode?.isInvalid}
          helperText={validation?.verificationCode?.message}
          allowNegative={false}
          decimalSeparator={null}
          allowLeadingZeros
        />

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          ustifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
          paddingBottom: 10
        }}>
          <span style={{ margin: 0, fontWeight: 500 }}>Apakah Anda memasang iklan untuk bisnis Anda?</span>
          <Switch
            checked={isForBusiness}
            onChange={() => setIsForBusiness(prev => !prev)}
          />
        </div>

        <div style={{
          height: 1,
          backgroundColor: HEADER_BORDER_BOTTOM_COLOR,
          margin: '10px 0'
        }}/>

        <h3 style={{ margin: '10px 0'}}>Alamat</h3>

        <Autocomplete
          disabled={loading}
          options={provinces}
          getOptionLabel={(option) => option.name}
          noOptionsText="Pilihan tidak ditemukan"
          loadingText="Memuat..."
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
          disabled={Validator.isEmpty(province) || loading}
          loading={loadingCities}
          options={cities}
          getOptionLabel={(option) => option.name}
          noOptionsText="Pilihan tidak ditemukan"
          loadingText="Memuat..."
          value={city}
          onChange={(_, value) => setCity(value)}
          renderInput={(params) => 
            <TextField 
              {...params} 
              label="Kota/Kabupaten"
              fullWidth
              disabled={Validator.isEmpty(province) || loading} 
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
          disabled={Validator.isEmpty(province) || Validator.isEmpty(city) || loading}
          loading={loadingDistricts}
          options={districts}
          getOptionLabel={(option) => option.name}
          noOptionsText="Pilihan tidak ditemukan"
          loadingText="Memuat..."
          value={district}
          onChange={(_, value) => setDistrict(value)}
          renderInput={(params) => 
            <TextField 
              {...params} 
              label="Kecamatan"
              fullWidth
              disabled={Validator.isEmpty(province) || Validator.isEmpty(city) || loading} 
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
          inputProps={{
            maxLength: ADDRESS_MAX_LENGTH
          }}
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
          label="Simpan"
          thick
          style={{
            marginTop: 10,
            marginBottom: 10
          }}
          fullWidth
          onClick={createStore}
          loading={loading}
        />
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
  `,
  me: graphql`
    fragment CreateStoreScreen_me on User {
      id,
      store {
        id
      }
    }
  `
})