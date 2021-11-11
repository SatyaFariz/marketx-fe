import { PASSWORD_MAX_LENGTH } from '../../Constants'
import { TextField, ButtonBase } from '@material-ui/core'
import { useState, useRef, useEffect } from 'react'
import useAppContext from '../../hooks/useAppContext'
import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import Button from '../../Components/Button'
import Link from '../../Components/Link'
import ResetPassword from '../../../mutations/ResetPassword'
import Validator from '../../../helpers/validator'
import Logo from '../../../assets/marketx_logo.jpg'

const Component = props => {
  const { me } = props
  const _isMounted = useRef(true)
  const { history, environment, queryParams } = useAppContext()
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [validation, setValidation] = useState({ isValid: false })

  const isValid = () => {
    const validator = new Validator([
      {
        field: 'password',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Isi kata sandi baru Anda.'
      },
      {
        field: 'password',
        method: Validator.isStrongPassword,
        validWhen: true,
        message: 'Kata sandi minimal 6 karakter dan harus terdiri dari minimal 1 huruh kecil, 1 huruf besar, 1 angka.'
      },
      {
        field: 'repassword',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Ulangi kata sandi baru Anda.'
      },
      {
        field: 'repassword',
        method: () => Validator.isEmpty(password),
        validWhen: false,
        message: 'Isi kata sandi baru Anda terlebih dahulu.'
      },
      {
        field: 'repassword',
        method: Validator.isStrongPassword,
        validWhen: true,
        message: 'Kata sandi minimal 6 karakter dan harus terdiri dari minimal 1 huruh kecil, 1 huruf besar, 1 angka.'
      },
      {
        field: 'repassword',
        method: v => v === password,
        validWhen: true,
        message: 'Kata sandi tidak sama.'
      },
    ])
    const validation = validator.validate({
      password,
      repassword,
    })
    setValidation(validation)
    return validation.isValid
  }

  const reset = () => {
    if(isValid() && !loading) {
      const variables = {
        id: queryParams.id,
        token: queryParams.token,
        newPassword: password
      }
      setLoading(true)
      ResetPassword(environment, variables, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          const { hasError, message } = payload
          alert(message)
          if(!hasError) {
            // do sth
            history.push('/login')
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
    if(me) {
      history.replace('/')
    }
  }, [me, history])

  if(me) return null

  return (
    <div>
      <div style={{
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30
      }}>
        <ButtonBase
          component={Link}
          href='/'
          disableRipple
        >
          <img
            alt="twitter"
            src={Logo}
            style={{
              height: 25
            }}
          />
        </ButtonBase>

        <h1 style={{
          marginTop: 30,
          marginBottom: 10
        }}>Atur ulang kata sandi</h1>

        
        <TextField
          variant="outlined"
          label="Kata Sandi Baru"
          fullWidth
          disabled={loading}
          inputProps={{
            maxLength: PASSWORD_MAX_LENGTH
          }}
          style={{
            marginTop: 10,
            marginBottom: 10
          }}
          onChange={(e) => setPassword(e.target.value.trim())}
          value={password}
          error={validation?.password?.isInvalid}
          helperText={validation?.password?.message}
          type="password"
        />

        <TextField
          variant="outlined"
          label="Konfirmasi Kata Sandi Baru"
          fullWidth
          disabled={loading}
          inputProps={{
            maxLength: PASSWORD_MAX_LENGTH
          }}
          style={{
            marginTop: 10,
            marginBottom: 10
          }}
          onChange={(e) => setRepassword(e.target.value.trim())}
          value={repassword}
          error={validation?.repassword?.isInvalid}
          helperText={validation?.repassword?.message}
          type="password"
        />

        <Button
          label="Simpan"
          thick
          style={{
            marginTop: 10,
            marginBottom: 10
          }}
          fullWidth
          onClick={reset}
          loading={loading}
        />
      </div>
    </div>
  )
}

export default createFragmentContainer(Component, {
  me: graphql`
    fragment ResetPasswordScreen_me on User {
      id
    }
  `
})