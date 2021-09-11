import { LOGO_URL } from '../../Constants'
import { TextField } from '@material-ui/core'
import { useState, useRef, useEffect } from 'react'
import useAppContext from '../../hooks/useAppContext'
import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import Button from '../../Components/Button'
import ChangePassword from '../../../mutations/ChangePassword'
import Validator from '../../../helpers/validator'

const Component = props => {
  const { me } = props
  const _isMounted = useRef(true)
  const { history, environment } = useAppContext()
  const [currentPassword, setCurrentPassword] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [validation, setValidation] = useState({ isValid: false })

  const isValid = () => {
    const validator = new Validator([
      {
        field: 'currentPassword',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Fill in your password.'
      },
      {
        field: 'password',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Fill in your password.'
      },
      {
        field: 'repassword',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Fill in your password confirmation.'
      },
      {
        field: 'repassword',
        method: () => Validator.isEmpty(password),
        validWhen: false,
        message: 'Fill in your password first.'
      },
      {
        field: 'repassword',
        method: v => v === password,
        validWhen: true,
        message: 'Must match your password.'
      },
    ])
    const validation = validator.validate({
      currentPassword,
      password,
      repassword,
    })
    setValidation(validation)
    return validation.isValid
  }

  const save = () => {
    if(isValid() && !loading) {
      if(!loading) {
        setLoading(true)
        ChangePassword(environment, { currentPassword, newPassword: password }, (payload, error) => {
          if(error) {
            console.log(error)
          } else if(payload) {
            const { hasError, message } = payload
            alert(message)
            if(!hasError) {
              // do sth
            }
          }
  
          _isMounted.current && setLoading(false)
        })
      }
    }
  }

  useEffect(() => {
    return () => _isMounted.current = false
  }, [])

  useEffect(() => {
    if(!me) {
      history.replace('/')
    }
  }, [me, history])

  if(!me) return null

  return (
    <div>
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
        }}>Change Password</h1>

        <TextField
          variant="outlined"
          label="Password Anda"
          fullWidth
          disabled={loading}
          style={{
            marginTop: 10,
            marginBottom: 10
          }}
          onChange={(e) => setCurrentPassword(e.target.value.trim())}
          value={currentPassword}
          error={validation?.currentPassword?.isInvalid}
          helperText={validation?.currentPassword?.message}
          type="password"
        />

        <TextField
          variant="outlined"
          label="Password Baru"
          fullWidth
          disabled={loading}
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
          label="Konfirmasi Password Baru"
          fullWidth
          disabled={loading}
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
          onClick={save}
          loading={loading}
        />
      </div>
    </div>
  )
}

export default createFragmentContainer(Component, {
  me: graphql`
    fragment ChangePasswordScreen_me on User {
      id
    }
  `
})