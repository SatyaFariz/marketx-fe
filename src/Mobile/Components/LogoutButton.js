import { Button } from '@material-ui/core'
import Logout from '../../mutations/Logout'
import useAppContext from '../hooks/useAppContext'
import { useState, useRef, useEffect } from 'react'

const Component = props => {
  const _isMounted = useRef(true)
  const { environment, resetEnvironment, history } = useAppContext()
  const [loading, setLoading] = useState(false)

  const logout = () => {
    if(!loading) {
      setLoading(true)
      Logout(environment, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          const { hasError } = payload
          if(!hasError) {
            history.push('/') 
            resetEnvironment()   
          }

          _isMounted.current && setLoading(false)
        }
      })
    }
  }
  
  useEffect(() => {
    return () => _isMounted.current = false
  }, [])
  return (
    <Button
      variant="contained"
      onClick={logout}
    >
      Logout
    </Button>
  )
}

export default Component