import { TextField } from '@material-ui/core'
import { useState, useRef, useEffect } from 'react'
import useAppContext from '../../hooks/useAppContext'
import useDisablePullToRefresh from '../../hooks/useDisablePullToRefresh'
import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import Button from '../../Components/Button'
import { LOGO_URL } from '../../Constants'
import { isEmail } from 'validator'
import RequestPasswordResetLink from '../../../mutations/RequestPasswordResetLink'

const Component = props => {
  useDisablePullToRefresh()
  const { me } = props
  const _isMounted = useRef(true)
  const { history, environment } = useAppContext()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const request = () => {
    if(!loading) {
      setLoading(true)
      RequestPasswordResetLink(environment, { email }, (payload, error) => {
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
          alt="marketx-logo"
          src={LOGO_URL}
          style={{
            height: 24
          }}
        />

        <h1 style={{
          marginTop: 30,
          marginBottom: 10
        }}>Lupa kata sandi</h1>

        
        <TextField
          variant="outlined"
          label="Email"
          fullWidth
          disabled={loading}
          style={{
            marginTop: 10,
            marginBottom: 10
          }}
          onChange={(e) => setEmail(e.target.value.trim())}
          value={email}
          type="email"
        />

        <Button
          label="Selanjutnya"
          thick
          style={{
            marginTop: 10,
            marginBottom: 10
          }}
          fullWidth
          onClick={request}
          loading={loading}
          disabled={!isEmail(email)}
        />
      </div>
    </div>
  )
}

export default createFragmentContainer(Component, {
  me: graphql`
    fragment ForgotPasswordScreen_me on User {
      id
    }
  `
})