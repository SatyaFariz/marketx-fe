import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR } from '../../Constants'
import BackButton from '../../Components/BackButton'
import Button from '../../Components/Button'
import { TextField } from '@material-ui/core'
import { useState, useRef, useEffect } from 'react'
import useAppContext from '../../hooks/useAppContext'
import CreateAttributes from '../../../mutations/CreateAttributes'

const Component = props => {
  const isMounted = useRef(true)
  const [names, setNames] = useState('')
  const [loading, setLoading] = useState(false)
  const { environment, history } = useAppContext()

  const save = () => {
    if(names.length > 0 && !loading) {
      const _names = names.split(',').map(name => name.trim())
      CreateAttributes(environment, { names: _names }, (payload, error) => {
        if(error) {
          console.log(error)
        }
        else if(payload) {
          alert('Attributes created.')
          history.goBack()
        }

        if(isMounted.current) {
          setLoading(false)
          setNames('')
        }
      })

      setLoading(true)
    }
  }

  useEffect(() => {
    return () => isMounted.current = false
  }, [])

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
        position: 'sticky',
        justifyContent: 'space-between',
        top: 0,
        zIndex: 9999,
        borderBottom: `1px solid ${HEADER_BORDER_BOTTOM_COLOR}`
      }}>
        <BackButton/>
        <div style={{ marginRight: 15, zIndex: 1 }}>
          <Button 
            label="Save"
            onClick={save}
            loading={loading}
          />
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
          }}>Create Attributes</h1>
        </div>
      </div>

      <div style={{
        padding: 20
      }}>
        <TextField
          variant="outlined"
          label="Attribute Names"
          fullWidth
          multiline
          onChange={(e) => setNames(e.target.value.trimLeft())}
          value={names}
        />
      </div>
    </div>
  )
}

export default Component