import { LOGO_URL } from '../../Constants'
import { TextField } from '@material-ui/core'
import { useState, useRef, useEffect } from 'react'
import useAppContext from '../../hooks/useAppContext'
import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import Button from '../../Components/Button'
import ResetPassword from '../../../mutations/ResetPassword'
import Validator from '../../../helpers/validator'

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
        message: 'Fill in your password.'
      },
      {
        field: 'password',
        method: Validator.isStrongPassword,
        validWhen: true,
        message: 'Password must contain at least 1 lower case, 1 upper case, 1 number, min 6 characters and max 30 characters.'
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
        }}>Reset Password</h1>

        
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
          label="Reset"
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